(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const hamburger = toggle.querySelector('.hamburger');

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-open');
  });

  // Insert current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();