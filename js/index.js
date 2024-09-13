const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

// Animação
if(window.SimpleAnime) { 
  new SimpleAnime();
  } 


//Ir ao topo
  window.onscroll = function() {
    displayScrollButton();
};

function displayScrollButton() {
    let topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.display = "block"; // Mostra o botão
    } else {
        topButton.style.display = "none"; // Esconde o botão
    }
}

// Função para rolar ao topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente ao topo
}