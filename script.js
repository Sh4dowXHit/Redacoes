
// Alternar menu lateral
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// Alternar abas
const links = document.querySelectorAll('.side-menu a');
const tabs = document.querySelectorAll('.tab');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    sideMenu.classList.remove('open');
  });
});

// Copiar IP ao toque
document.querySelectorAll('.copy-ip').forEach(el => {
  el.addEventListener('click', () => {
    const ip = el.getAttribute('data-ip');
    navigator.clipboard.writeText(ip);
    alert(`IP copiado: ${ip}`);
  });
});
