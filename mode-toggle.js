// Mode toggle functionality
// Supports two modes: 'ns' (neuroscience) and 'cs' (computer science)

const MODE_KEY = 'content-mode';
const MODES = {
  NS: 'ns',
  CS: 'cs'
};

// Get current mode from localStorage
function getCurrentMode() {
  return localStorage.getItem(MODE_KEY) || MODES.CS; // Default to CS
}

// Set mode in localStorage
function setMode(mode) {
  localStorage.setItem(MODE_KEY, mode);
}

// Switch to the other mode
function toggleMode() {
  const currentMode = getCurrentMode();
  const newMode = currentMode === MODES.NS ? MODES.CS : MODES.NS;

  setMode(newMode);
  applyMode(newMode);
}

// Apply the mode by showing/hiding content
function applyMode(mode) {
  // Update button states
  const nsBtn = document.getElementById('mode-ns');
  const csBtn = document.getElementById('mode-cs');

  if (nsBtn && csBtn) {
    if (mode === MODES.NS) {
      nsBtn.classList.add('active');
      csBtn.classList.remove('active');
    } else {
      nsBtn.classList.remove('active');
      csBtn.classList.add('active');
    }
  }

  // Show/hide mode-specific content
  const csContent = document.querySelectorAll('.mode-cs');
  const nsContent = document.querySelectorAll('.mode-ns');

  if (mode === MODES.CS) {
    csContent.forEach(el => el.style.display = 'block');
    nsContent.forEach(el => el.style.display = 'none');
  } else {
    csContent.forEach(el => el.style.display = 'none');
    nsContent.forEach(el => el.style.display = 'block');
  }

  // Show/hide mode-specific inline content
  const csInlineContent = document.querySelectorAll('.mode-cs.inline');
  const nsInlineContent = document.querySelectorAll('.mode-ns.inline');

  if (mode === MODES.CS) {
    csInlineContent.forEach(el => el.style.display = 'inline');
    nsInlineContent.forEach(el => el.style.display = 'none');
  } else {
    csInlineContent.forEach(el => el.style.display = 'none');
    nsInlineContent.forEach(el => el.style.display = 'inline');
  }
}

// Initialize mode on page load
function initToggle() {
  const currentMode = getCurrentMode();
  applyMode(currentMode);
}

// Run on page load
document.addEventListener('DOMContentLoaded', initToggle);
