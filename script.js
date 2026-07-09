// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Sequence ruler fills as you scroll the page
const rulerFill = document.getElementById('rulerFill');

function updateRuler() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  rulerFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateRuler, { passive: true });
updateRuler();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Re-scroll to the correct anchor once fonts/layout have fully settled
if (location.hash) {
  window.addEventListener('load', () => {
    const target = document.querySelector(location.hash);
    if (target) {
      // Wait for web fonts to finish loading and layout to settle
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
          }, 50);
        });
      } else {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, 300);
      }
    }
  });
}
