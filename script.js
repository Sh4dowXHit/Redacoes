
// Scroll suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Cópia de IP ao clicar
document.querySelectorAll('.copy-ip').forEach(element => {
  element.addEventListener('click', () => {
    const texto = element.getAttribute('data-ip');
    navigator.clipboard.writeText(texto).then(() => {
      alert(`IP copiado: ${texto}`);
    });
  });
});
