const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// Alternar menu lateral
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  menuToggle.style.display = 'block';
});

// Alternar abas e esconder o botão
const links = document.querySelectorAll('.side-menu a');
const tabs = document.querySelectorAll('.tab');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    // Fecha menu e oculta botão
    sideMenu.classList.remove('open');
    menuToggle.style.display = 'none';

    // Mostra botão de novo depois de um tempo
    setTimeout(() => {
      menuToggle.style.display = 'block';
    }, 500);
  });
});

// Copiar IP
document.querySelectorAll('.copy-ip').forEach(el => {
  el.addEventListener('click', () => {
    const ip = el.getAttribute('data-ip');
    navigator.clipboard.writeText(ip);
    alert(`IP copiado: ${ip}`);
  });
});