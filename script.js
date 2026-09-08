// Carrusel con dots
let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

images.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => { slideIndex = i; updateSlide(); });
  dotsContainer.appendChild(dot);
});

function updateSlide() {
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i === slideIndex));
}
document.querySelector('.next').addEventListener('click', () => { slideIndex = (slideIndex + 1) % images.length; updateSlide(); });
document.querySelector('.prev').addEventListener('click', () => { slideIndex = (slideIndex - 1 + images.length) % images.length; updateSlide(); });
setInterval(() => { slideIndex = (slideIndex + 1) % images.length; updateSlide(); }, 5000);
updateSlide();

// Música
const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
let isPlaying = false;
playBtn.addEventListener('click', () => {
  if (isPlaying) { music.pause(); playBtn.innerHTML = '🎵 Toca para escuchar nuestra canción'; } 
  else { music.play(); playBtn.innerHTML = '⏸️ Pausar nuestra canción'; }
  isPlaying = !isPlaying;
});

// Pétalos cayendo
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.innerHTML = '🌸';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.fontSize = Math.random() * 10 + 15 + 'px';
  petal.style.animationDuration = Math.random() * 5 + 8 + 's';
  document.querySelector('.petals').appendChild(petal);
  setTimeout(() => petal.remove(), 13000);
}
setInterval(createPetal, 400);

// Contador de amor
function updateCounter() {
  const startDate = new Date('2025-09-07T21:28:00');
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  document.getElementById('counter').innerHTML = `💖 Llevamos juntos: ${days} días, ${hours} horas y ${minutes} minutos`;
}
setInterval(updateCounter, 60000);
updateCounter();

// Estrellas de fondo
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let stars = [];
for(let i=0; i<150; i++) stars.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2});
function drawStars() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill(); });
}
drawStars();