// Keep navigation context available to assistive technology without changing
// native anchors, so every link still works with JavaScript disabled.
const navigationLinks = document.querySelectorAll('nav a');
function updateNavigation() {
  navigationLinks.forEach((link) => {
    if (link.hash === window.location.hash) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateNavigation);
updateNavigation();
