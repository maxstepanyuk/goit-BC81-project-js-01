import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // todo: are too hard to override

const feedbackSwiperElement = document.querySelector('.feedback-swiper');

const swiperOptions = {
  spaceBetween: 32,

  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true, // todo: only PC
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination],
};

export const feedbackSwiper = new Swiper(feedbackSwiperElement, swiperOptions);
