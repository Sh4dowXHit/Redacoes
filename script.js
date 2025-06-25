const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// Alternar menu lateral
menuToggle.addEventListener('click', () => {
sideMenu.classList.toggle('open');
menuToggle.style.display = sideMenu.classList.contains('open') ? 'block' : 'block'; // permanece visível ao abrir
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

// Fechar menu e esconder botão ≡  
sideMenu.classList.remove('open');  
menuToggle.style.display = 'none';  

// Mostrar o botão novamente após 500ms (tempo para trocar aba)  
setTimeout(() => {  
  menuToggle.style.display = 'block';  
}, 500);

});
});

