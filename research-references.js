(() => {
  const summary = document.querySelector('.research-summary');
  if (!summary) return;
  const highlights = new WeakMap();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  summary.addEventListener('click', event => {
    const link = event.target.closest('.research-ref');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const project = document.getElementById(link.hash.slice(1));
    const title = project?.querySelector('.papertitle');
    if (!title) return;

    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    title.scrollIntoView({ block: 'center', behavior: 'instant' });
    title.setAttribute('tabindex', '-1');
    title.focus({ preventScroll: true });
    highlights.get(title)?.cancel();
    const faint = 'rgba(0, 0, 0, 0.06)';
    const frames = reducedMotion.matches
      ? [{ backgroundColor: faint }, { backgroundColor: faint }]
      : [
          { backgroundColor: 'transparent', offset: 0 },
          { backgroundColor: faint, offset: 0.12 },
          { backgroundColor: faint, offset: 0.35 },
          { backgroundColor: 'transparent', offset: 1 }
        ];
    highlights.set(title, title.animate(frames, {
      duration: reducedMotion.matches ? 900 : 1800,
      easing: 'ease-out'
    }));
  });
})();
