// função para efeito de digitação 
function efeitoDigitacaoLoop(elemento, texto, velocidadeDigitando = 200, velocidadeApagando = 150, tempoEspera = 2500) {
    let i = 0;
    let apagando = false;

    function digitar() {
        if (!apagando) {
            elemento.innerHTML = texto.substring(0, i + 1);
            i++;
            if (i === texto.length) {
                apagando = true;
                setTimeout(digitar, tempoEspera); // Espera antes de começar a apagar
                return;
            }
        } else {
            elemento.innerHTML = texto.substring(0, i - 1);
            i--;
            if (i === 0) {
                apagando = false;
            }
        }

        const velocidade = apagando ? velocidadeApagando : velocidadeDigitando;
        setTimeout(digitar, velocidade);
    }

    digitar();
}
const spanDigitando = document.getElementById('digitando');
const texto = 'Desenvolvedor Front End';
efeitoDigitacaoLoop(spanDigitando, texto);

// Final da função

// Função sumir a seta quando usuário rolar para baixo

window.addEventListener('scroll', function() {
    const seta = document.querySelector('.seta-container');
    if (window.scrollY > 100) {
        seta.classList.add('oculto');
    } else {
        seta.classList.remove('oculto');
    }
});

// Final da função

// Função de scroll Reveal

function revelarAoScroll() {
    const elementos = document.querySelectorAll('.reveal');

    for (let i = 0; i < elementos.length; i++) {
        const windowHeight = window.innerHeight;
        const elementoTopo = elementos[i].getBoundingClientRect().top;
        const elementoVisivel = 300;

        if (elementoTopo < windowHeight - elementoVisivel) {
            elementos[i].classList.add('active');
        } else {
            elementos[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revelarAoScroll);
window.addEventListener('load', revelarAoScroll);


// Final da função

// Função de scroll quando clicar na seta

const seta = document.getElementById('scroll-down');

seta.addEventListener('click', () => {
    const proximaSection = document.querySelector('section:nth-of-type(2)');
    proximaSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', revelarAoScroll);

// Final da função

//Função de carrossel

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 16,
		autoplay: true,
		autoplayTimeout: 1650,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1024: {
				items: 4, // A partir de 1024px mostra 4
			},
			1280: {
				items: 5, // A partir de 1280px mostra 5
			}
		},
	});
});

// Função do formulário

const textarea = document.querySelector("textarea");
textarea.style.resize = "none";

// Final da função

// Função footer
const anoAtual = new Date().getFullYear();
const footerCopy = document.getElementById('footer-copy');

footerCopy.innerHTML = `© ${anoAtual} Warley Almeida - Todos os direitos reservados.`;

// -------------------------------Funções mobiles-------------------------------

// Função menu mobile

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar_link");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// Função para desativar carrossel em 640px
$(document).ready(function () {
    if ($(window).width() <= 640) {
        $(".owl-carousel").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    } else {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 16,
            autoplay: true,
            autoplayTimeout: 1650,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                },
            },
        });
    }
});
