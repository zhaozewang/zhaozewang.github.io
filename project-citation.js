document.querySelectorAll('.citation-container').forEach(card => {
  const button = card.querySelector('.copy-button');
  let reset;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(card.querySelector('pre').textContent.trim());
      button.textContent = 'Copied';
    } catch {
      button.textContent = 'Select to copy';
      const range = document.createRange();
      range.selectNodeContents(card.querySelector('pre'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    clearTimeout(reset);
    reset = setTimeout(() => { button.textContent = 'Copy'; }, 1800);
  });
});
