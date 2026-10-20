// Mobile nav toggle — Leo's Barber
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-links');
  if (!toggle || !menu) return;

  var icon = toggle.querySelector('i');

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (icon) {
      icon.classList.toggle('bi-list', !open);
      icon.classList.toggle('bi-x', open);
    }
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (icon) {
        icon.classList.add('bi-list');
        icon.classList.remove('bi-x');
      }
      document.body.style.overflow = '';
    });
  });
});
