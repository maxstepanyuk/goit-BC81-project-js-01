import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const aboutUsSlider = document.querySelector('.about-us-slider');

if (aboutUsSlider) {
  new Swiper(aboutUsSlider, {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    speed: 500,

    navigation: {
      nextEl: '.about-us-button-next',
      prevEl: '.about-us-button-prev',
    },

    pagination: {
      el: '.about-us-pagination',
      clickable: true,
    },
  });
}
