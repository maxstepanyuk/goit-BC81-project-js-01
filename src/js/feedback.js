import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // todo: are too hard to override

const feedbackSwiperElement = document.querySelector('.feedback-swiper');

const swiperOptions = {
  spaceBetween: 32,
  // slidesPerView: 2, // todo: only Tablet
  // slidesPerView: 3, // todo: only PC

  pagination: {
    el: '.feedback-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.feedback-next',
    prevEl: '.feedback-prev',
  },
  modules: [Navigation, Pagination],
};

export const feedbackSwiper = new Swiper(feedbackSwiperElement, swiperOptions);
