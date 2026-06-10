document.getElementById('current-year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

const activateLink = () => {
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove('is-active'));
      const active = document.querySelector(`.site-nav a[href="#${id}"]`);
      if (active) active.classList.add('is-active');
    }
  });
};

window.addEventListener('scroll', activateLink);
activateLink();
