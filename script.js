// PanAstro Interactive Parallax
document.addEventListener('mousemove', (e) => {
  const starfield = document.getElementById('starfield');
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  starfield.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});
