import axios from 'axios';
import iziToast from 'izitoast';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import 'css-star-rating/css/star-rating.css';

import iconsUrl from '/img/sprite.svg';


const feedbackSwiperElement = document.querySelector('.feedback-swiper'); //todo: move to refs.js
const feedbackList = document.querySelector('.js-feedback-list'); //todo: move to refs.js
const feedbackLoader = document.querySelector('.feedback-loader'); //todo: move to refs.js

const MOBILE_WIDTH_PX = 375;
const TABLET_WIDTH_PX = 768;
const DESKTOP_WIDTH_PX = 1440;

const API_ENDPOINT_FEEDBACKS = '/feedbacks'; //todo: move to obj in constans.js

const swiperOptions = {
  spaceBetween: 32,
  breakpoints: {
    [MOBILE_WIDTH_PX]: {
      slidesPerView: 1,
    },
    [TABLET_WIDTH_PX]: {
      slidesPerView: 2,
    },
    [DESKTOP_WIDTH_PX]: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.feedback-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.feedback-next',
    prevEl: '.feedback-prev',
  },
  modules: [Navigation, Pagination],
};

export const feedbackSwiper = new Swiper(feedbackSwiperElement, swiperOptions);

//todo: move to some js file in /common. init() of some sort in handlers
initFeedbacks();

async function getFeedbacks(limit = 10, page = 1) {
  //todo: move to api.js
  const params = {
    limit,
    page,
  };

  const config = {
    params,
  };

  const { data } = await axios.get(API_ENDPOINT_FEEDBACKS, config);
  return data;
}

export async function initFeedbacks() {
  try {
    showLoaderFeedbacks();

    const { feedbacks } = await getFeedbacks();
    renderFeedbacks(feedbacks);
  } catch (error) {
    iziToast.error({
      message: 'Помилка отримання відгуків',
      position: 'topRight',
    });
    console.log(error);
  } finally {
    hideLoaderFeedbacks();
  }
}

//todo: move to render-functions.js
function renderFeedbacks(feedbacks) {
  const markup = feedbacks.map(createFeedbackMarkup).join('');
  feedbackList.innerHTML = markup;
}

function createFeedbackMarkup({ author, date, description, rate }) {
  const ratingDecimal = rate % 1;
  const isHalfStarShown = ratingDecimal >= 0.5;
  const halfStarClass = isHalfStarShown ? 'half' : '';

  const fullStars = Math.floor(rate);

  return `<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${fullStars} ${halfStarClass} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${iconsUrl}#icon-full-star"
            ></use>
          </svg>
        </li>
      </ul>
    </div>
    <p class="feedback-text">${description}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${author}</p>
    <p class="feedback-date">${date}</p>
  </div>
</li>`;
}

function showLoaderFeedbacks() {
  feedbackLoader.classList.remove('is-hidden');
}

function hideLoaderFeedbacks() {
  feedbackLoader.classList.add('is-hidden');
}
