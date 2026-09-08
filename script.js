// Carrusel
let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % images.length;
  updateSlide();
});
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + images.length) % images.length;
  updateSlide();
});
function updateSlide() {
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
setInterval(() => { // Auto slide
  slideIndex = (slideIndex + 1) % images.length;
  updateSlide();
}, 4000);

// Música
const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
let isPlaying = false;
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    playBtn.innerHTML = '▶️ Dar Play a Nuestra Canción';
  } else {
    music.play();
    playBtn.innerHTML = '⏸️ Pausar Nuestra Canción';
  }
  isPlaying = !isPlaying;
});

// Corazones cayendo
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 5 + 's';
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);