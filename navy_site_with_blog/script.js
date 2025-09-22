// Active nav highlighting + current year
(function(){
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]')?.forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here) { a.setAttribute('aria-current','page'); }
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
