
// Copiar IP ao tocar
document.querySelectorAll('.copy-ip').forEach(el => {
  el.addEventListener('click', () => {
    const ip = el.getAttribute('data-ip');
    navigator.clipboard.writeText(ip);
    alert(`IP copiado: ${ip}`);
  });
});

// Toggle menu lateral
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
