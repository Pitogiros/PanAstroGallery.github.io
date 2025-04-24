// Lightbox with navigation
document.addEventListener('DOMContentLoaded', function() {
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

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Previous image
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  });

  // Next image
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      switch(e.key) {
        case 'Escape':
          modal.classList.add('hidden');
          document.body.style.overflow = 'auto';
          break;
        case 'ArrowLeft':
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateLightbox();
          break;
        case 'ArrowRight':
          currentIndex = (currentIndex + 1) % images.length;
          updateLightbox();
          break;
      }
    }
  });

  // Parallax effect
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    document.getElementById('starfield').style.transform =
      `translate3d(${x}px, ${y}px, 0)`;
  });
});
