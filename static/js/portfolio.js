$(document).ready(function () {
  const modalOverlay = document.getElementById('paletteModalOverlay');
  const modalElement = document.getElementById('paletteModal');
  const swiperWrapper = modalElement.querySelector('.swiper-wrapper');
  let swiper = null;

  window.showPaletteModal = function (paletteId, paletteName, images) {
    console.log("Showing modal for palette:", paletteId, paletteName, images);

    modalElement.querySelector('.modal-title').textContent = paletteName;
    swiperWrapper.innerHTML = ''; // Clear existing slides

    if (Array.isArray(images)) {
      images.forEach(imageUrl => {
        swiperWrapper.innerHTML += `<div class="swiper-slide"><img src="${imageUrl}" alt="Palette image" /></div>`;
      });
    } else {
      console.error('Images provided to the modal is not an array.');
    }

    if (swiper) { swiper.destroy(true, true); }
    swiper = new Swiper('.swiper', {
      // Swiper options
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      observer: true, observeParents: true,
    });

    modalOverlay.classList.add('active');
    modalElement.classList.add('active');
    modal.show();
  };

  window.hidePaletteModal = function () {
    modalOverlay.classList.remove('active');
    modalElement.classList.remove('active');
    modal.hide();
  };

  modalOverlay.addEventListener('click', hidePaletteModal);

  modalElement.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hidePaletteModal();
    }
  });

  // close
  const close = document.getElementById('close-portfolio-modal');
  close.addEventListener('click', function () {
    hidePaletteModal();
  });
});
