const body = document.body;
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.backdrop');
const topButton = document.querySelector('.to-top');
const navLinks = [...document.querySelectorAll('.side-nav a')];

document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());

const eventGrid = document.querySelector('.event-grid');
if (eventGrid) {
  const now = Date.now();
  eventGrid.querySelectorAll('[data-event-end]').forEach(card => {
    const endTime = Date.parse(card.dataset.eventEnd);
    if (Number.isFinite(endTime) && endTime <= now) card.remove();
  });
  if (!eventGrid.querySelector('[data-event-end]')) {
    eventGrid.innerHTML = '<p class="no-events">There are no upcoming events at the moment. Please check back soon.</p>';
  }
}

function closeMenu() {
  body.classList.remove('menu-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
}

menu.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
backdrop.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const sections = [...document.querySelectorAll('main section[id], footer[id]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%' });
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => topButton.classList.toggle('show', scrollY > 650), { passive: true });
topButton.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
