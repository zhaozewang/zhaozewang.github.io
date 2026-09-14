(() => {
  document.querySelectorAll('.project-preview, .spatial-gallery video').forEach(setupPreview);

  function setupPreview(video) {
    let starting = false;
    let retryTimer;
    let retries = 0;
    video.autoplay = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'auto';

    function updatePlayback() {
      if (document.hidden) {
        clearTimeout(retryTimer);
        video.pause();
        return;
      }
      if (!video.paused || starting || video.readyState < 2 || video.error) return;
      clearTimeout(retryTimer);
      starting = true;
      video.play().then(() => {
        retries = 0;
        video.dataset.playback = 'playing';
        if (document.hidden) video.pause();
      }).catch(error => {
        video.dataset.playback = error.name === 'NotAllowedError' ? 'blocked' : 'paused';
        // A load or visibility change can interrupt play after media becomes ready.
        if (error.name !== 'NotAllowedError' && !document.hidden && retries < 3) {
          retries += 1;
          retryTimer = setTimeout(updatePlayback, retries * 500);
        }
      }).finally(() => {
        starting = false;
      });
    }

    for (const event of ['loadeddata', 'canplay', 'canplaythrough', 'progress', 'suspend']) {
      video.addEventListener(event, updatePlayback);
    }
    function resumePlayback() {
      retries = 0;
      updatePlayback();
    }
    document.addEventListener('visibilitychange', resumePlayback);
    window.addEventListener('pageshow', resumePlayback);
    // Retry within a user gesture if browser autoplay policy rejected the first attempt.
    document.addEventListener('pointerdown', resumePlayback, { passive: true });
    document.addEventListener('keydown', resumePlayback);
    updatePlayback();
  }
})();
