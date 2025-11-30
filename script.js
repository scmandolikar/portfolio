// ============================
// Initialize Animation on Scroll (AOS)
// ============================
AOS.init({
  duration: 600,
  once: true,
  offset: 50
});

// ============================
// Initialize Typed.js for animated typing effect
// ============================
const typed = new Typed('#typed', {
  strings: [
    'Python Developer',
    'Aspiring Software Tester',
    'Data Analytics Learner'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// ============================
// Particle Animation System
// ============================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match window dimensions
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// Particle configuration
const particlesArray = [];
const numberOfParticles = 100;

// Particle class definition
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap particles around screen edges
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.fillStyle = `rgba(100, 180, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// Initialize particles
function initParticles() {
  particlesArray.length = 0;
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
initParticles();

// Animation loop for particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }

  requestAnimationFrame(animateParticles);
}
animateParticles();

// Handle window resize
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});
