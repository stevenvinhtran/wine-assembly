'use strict';
// ps_2_0 pixel shaders (MBAACC's D3DX effects) through the WAT scanner
// ($d3d_ir_scan_ps20), the JS IR reader and the GLSL lowering: a hand-written
// shader using every construct the scanner admits must translate, and forms
// outside the subset must be refused by the native validator.
const assert = require('assert');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const IR = require('../lib/d3d-shader-ir'), Shader = require('../lib/d3d9-shader');
const regions = require('../lib/region-map.generated');

const ins = (op, ...args) => [((op | (args.length << 24)) >>> 0), ...args];
const reg = (type, n, mask = 15) => (0x80000000 | (type & 7) << 28 | (type & 24) << 8 | mask << 16 | n) >>> 0;
const src = (type, n, swz = 0xe4, mod = 0) => (0x80000000 | (type & 7) << 28 | (type & 24) << 8 | swz << 16 | mod << 24 | n) >>> 0;
const f = x => new Uint32Array(new Float32Array([x]).buffer)[0];
const R = 0, V = 1, C = 2, T = 3, OC = 8, S = 10;

const shader = [0xffff0200,
  0x0002fffe, 0x42415443, 0,                                   // comment holding data
  ...ins(81, reg(C, 3), f(0), f(1), f(0.5), f(-1)),             // def c3
  ...ins(31, 0x80000000, reg(T, 0, 3)),                         // dcl t0.xy
  ...ins(31, 0x80000000, reg(V, 0)),                            // dcl v0
  ...ins(31, 0x90000000, reg(S, 0)),                            // dcl_2d s0
  ...ins(66, reg(R, 0), src(T, 0), src(S, 0)),                  // texld r0, t0, s0
  ...ins(4, reg(R, 1), src(R, 0), src(C, 0), src(V, 0)),        // mad
  ...ins(88, reg(R, 1, 8), src(R, 1, 0xff, 1), src(C, 3), src(C, 1)), // cmp r1.w, -r1.w
  ...ins(90, reg(R, 2, 1), src(T, 0), src(C, 1), src(C, 3, 0xaa)),    // dp2add
  ...ins(18, reg(R, 3), src(R, 2, 0), src(R, 1), src(R, 0, 0xe4, 11)), // lrp with abs
  ...ins(6, reg(R, 4, 1), src(R, 3, 0xff, 12)),                 // rcp -|x|
  ...ins(1, reg(OC, 0), src(R, 3)),                             // mov oC0
  ...ins(1, reg(OC, 1), src(R, 1)),                             // mov oC1 (dropped)
  0x0000ffff];

(async () => {
  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer };
  const imports = createHostImports(ctx);
  Object.assign(imports.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {},
    wait_multiple: () => 0, terminate_thread: () => 0 });
  const e = (await WebAssembly.instantiate(module, imports)).exports;
  ctx.exports = e;
  const imageBase = 0x400000;
  e.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  e.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);
  const wa = e.guest_to_wasm(e.guest_alloc(4096) >>> 0) >>> 0;
  const compile = words => {
    new Uint32Array(memory.buffer, wa, words.length).set(words);
    const p = e.d3d_shader_ir_compile(wa, words.length) >>> 0;
    if (!p) return { error: e.d3d_shader_ir_error() };
    try { return { ir: IR.read(memory.buffer, p) }; } finally { e.d3d_shader_ir_free(p); }
  };
  const { ir, error } = compile(shader);
  assert(ir, `ps_2_0 subset accepted (error ${error})`);
  assert.strictEqual(ir.version, 0xffff0200);
  const out = Shader.compileIR(ir, {});
  for (const piece of ['texture2D(d3d_s0, (d3d_tex0.xyzw).xy)', 'dot(', 'abs(', 'gl_FragColor = oC0;',
    'const vec4 d3d_ps_c3', 'varying vec4 d3d_color0;', 'uniform sampler2D d3d_s0;'])
    assert(out.source.includes(piece), `GLSL contains ${piece}`);
  // Multiple render targets: the shader reports the oC# it writes, and the
  // slot-1 variant routes oC1 to gl_FragColor (the backend replays into slot 1).
  assert.deepStrictEqual(out.colorOutputs, [0, 1]);
  assert(Shader.compileIR(ir, { colorOutput: 1 }).source.includes('gl_FragColor = oC1;'), 'slot-1 variant');
  // MBAACC draws its effect passes with fixed-function vertices and
  // SPECULARENABLE on: the guest pixel shader must link (specular -> COLOR1)
  // instead of being refused for a post-specular add it replaces.
  const Fixed = require('../lib/d3d9-fixed');
  const stage = { colorOp: 4, colorArg1: 2, colorArg2: 0, alphaOp: 4, alphaArg1: 2, alphaArg2: 0, colorArg0: 1, alphaArg0: 1,
    transform: new Float32Array(16), texCoordIndex: 0, transformFlags: 0, resultArg: 1, constant: 0 };
  const plan = Fixed.compile({ pixelShader: {}, textures: [{ width: 4, height: 4 }],
    attributes: [{ usage: 9, usageIndex: 0, register: 0 }, { usage: 10, usageIndex: 0, register: 1 },
      { usage: 10, usageIndex: 1, register: 2 }, { usage: 5, usageIndex: 0, register: 3 }],
    fixedFunction: { lighting: 0, fog: 0, specular: 1, stages: Array(8).fill(stage) } },
    { x: 0, y: 0, width: 64, height: 32, minZ: 0, maxZ: 1 }, out);
  assert(/d3d_tex0 = /.test(plan.vertex.source) && /d3d_color0 = /.test(plan.vertex.source), 'fixed VS feeds the ps_2_0 inputs');
  // Outside the subset: refused natively, never reaching the translator.
  const without = (i, w) => { const s = shader.slice(); s[i] = w; return s; };
  const texld = shader.indexOf(ins(66, 0, 0, 0)[0]);
  assert(compile(without(texld, (ins(66, 0, 0, 0)[0] | 0x10000) >>> 0)).error, 'texldp control refused');
  const constIndex = shader.indexOf(src(C, 0));
  assert(compile(without(constIndex, src(C, 32))).error, 'c32 beyond the ps_2_0 constant file refused');
  assert(compile([0xffff0200, ...ins(1, reg(R, 0), src(R, 0)), 0x0000ffff]).error, 'no colour output refused');
  console.log('d3d9 ps_2_0 PASS: subset scanned natively and lowered to GLSL; oC1 variant; fixed-VS+specular linkage; texldp, c32 and colourless shaders refused');
})().catch(err => { console.error(err); process.exitCode = 1; });
