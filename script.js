// Lightbox logic
const lightboxLinks = document.querySelectorAll('.lightbox');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('lightbox-img');

lightboxLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modalImg.src = link.href;
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImg.src = '';
});
