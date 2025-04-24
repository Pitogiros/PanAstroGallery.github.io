// Lightbox with navigation
const lightboxLinks = document.querySelectorAll('.lightbox');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const caption = document.getElementById('caption');

let currentIndex = 0;
const images = Array.from(lightboxLinks).map(link => ({
  src: link.href,
  alt: link.querySelector('img').alt
}));

// Open lightbox
lightboxLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = index;
    updateLightbox();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

// Update lightbox content
function updateLightbox() {
  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

// Navigation
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightbox();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightbox();
    }
  }
});

// Parallax effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const starfield = document.getElementById('starfield');
  
  starfield.style.transform = `
    translate3d(${x * 30}px, ${y * 30}px, 0)
  `;
});
