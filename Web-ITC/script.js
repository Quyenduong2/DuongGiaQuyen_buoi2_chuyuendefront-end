const swiperEl = document.querySelector('.box-item-major swiper-container');

const params = {
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  
};

Object.assign(swiperEl, params)

swiperEl.initialize();