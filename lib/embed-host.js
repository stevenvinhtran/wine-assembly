// ?embed: the runtime page inside a product page's iframe (melty-web's
// launcher). The head script in index.html has already read the launch config
// (window.__waEmbedConfig) and hidden the shell UI; the boot itself is the
// ordinary direct launch (?app=ID). This file is the channel back:
//
//   to the parent (postMessage, same origin only):
//     { source: 'wa-embed', type: 'engine-ready' }
//     { ..., type: 'booting', app }       the guest process exists
//     { ..., type: 'running', app }       the guest owns the screen, no dialog up
//     { ..., type: 'stopped', app, log }  the guest ended
//     { ..., type: 'fault', message, log } it never started, or the config was bad
//
//   from the parent:
//     { target: 'wa-embed', type: 'stop' }   end the guest
//     { target: 'wa-embed', type: 'focus' }  take keyboard focus
//
// Nothing here runs without ?embed.
(function () {
  'use strict';
  if (typeof window === 'undefined' || !document.documentElement.classList.contains('embed')) return;
  const parentWindow = window.parent && window.parent !== window ? window.parent : null;
  const origin = location.origin;
  const appId = new URLSearchParams(location.search).get('app') || '';

  function post(type, extra) {
    if (!parentWindow) return;
    try { parentWindow.postMessage(Object.assign({ source: 'wa-embed', type, app: appId }, extra || {}), origin); }
    catch (_) {}
  }

  function logTail(lines) {
    const el = document.getElementById('log');
    const text = el ? el.textContent || '' : '';
    return text.split('\n').filter(l => l && !/^\[(run|input)\]/.test(l)).slice(-(lines || 20));
  }

  window.addEventListener('message', event => {
    if (event.origin !== origin || event.source !== parentWindow) return;
    const msg = event.data;
    if (!msg || msg.target !== 'wa-embed') return;
    const shell = window.wineShell;
    if (msg.type === 'stop' && shell && typeof shell.stopAllApps === 'function') {
      try { shell.stopAllApps(); } catch (_) {}
    } else if (msg.type === 'focus') {
      const canvas = document.getElementById('screen');
      if (canvas) { canvas.tabIndex = canvas.tabIndex >= 0 ? canvas.tabIndex : 0; canvas.focus(); }
      window.focus();
    }
  });

  if (window.__waEmbedConfigError) {
    post('fault', { message: `launch config: ${window.__waEmbedConfigError}` });
    return;
  }

  // Lifecycle by observation: the shell has no event bus, and polling twice a
  // second costs nothing next to a running guest.
  let state = 'loading', calmSince = 0;
  const startedAt = Date.now();
  const timer = setInterval(() => {
    const shell = window.wineShell;
    if (!shell) return;
    if (state === 'loading') { state = 'ready'; post('engine-ready'); }
    const apps = Array.isArray(shell.runningApps) ? shell.runningApps : [];
    const entry = apps.find(item => item && item.wine);
    if (entry && (state === 'ready')) { state = 'booting'; post('booting'); }
    if (state === 'booting' && entry) {
      const renderer = shell.renderer || window.sharedRenderer;
      const dialogUp = renderer && Object.values(renderer.windows || {})
        .some(w => w && w.visible && w.isDialog);
      if (dialogUp) calmSince = 0;
      else if (!calmSince) calmSince = Date.now();
      else if (Date.now() - calmSince > 750) { state = 'running'; post('running'); }
    }
    if ((state === 'booting' || state === 'running') && !entry) {
      state = 'stopped';
      post('stopped', { log: logTail(30) });
      clearInterval(timer);
    }
    if (state === 'ready' && Date.now() - startedAt > 120000) {
      state = 'fault';
      post('fault', { message: 'the game did not start within two minutes', log: logTail(30) });
      clearInterval(timer);
    }
  }, 500);
})();
