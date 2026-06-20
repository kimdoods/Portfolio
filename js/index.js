document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.img-modal');
  const modalImg = document.querySelector('.img-modal__img');
  const closeBtn = document.querySelector('.img-modal__close');

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  // Open on click
  document.querySelectorAll('.img-thumb img').forEach(img => {
    img.addEventListener('click', () => {
      openModal(img.src, img.alt);
    });
  });

  // Close on X
  closeBtn.addEventListener('click', closeModal);

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
});
