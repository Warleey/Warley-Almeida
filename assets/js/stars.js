// Função de fundo animado

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  createStars();
});

const stars = [];
const starsCount = 200;

function createStars() {
  stars.length = 0;
  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    star.x += star.dx;
    star.y += star.dy;

    star.alpha += (Math.random() - 0.5) * 0.02;
    if (star.alpha < 0.1) star.alpha = 0.1;
    if (star.alpha > 1) star.alpha = 1;

    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;
    if (star.y < 0) star.y = height;
    if (star.y > height) star.y = 0;
  });

  requestAnimationFrame(animate);
}

createStars();
animate();