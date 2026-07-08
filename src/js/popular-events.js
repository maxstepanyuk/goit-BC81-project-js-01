import axios from 'axios';
import { API_ENDPOINTS, API_BASE_URL } from './common/constans';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import { handleEventDetailsModal } from './common/handlers';

axios.defaults.baseURL = API_BASE_URL;

const PLACEHOLDER =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10';

async function getPopularEvents() {
  const response = await axios.get(`${API_ENDPOINTS.EVENTS}?type=popular`);
  return response.data;
}

function renderPopularEvents(events) {
  const list = document.querySelector('.popular-list');

  const markup = events
    .map(({ _id, name, price, category, image }) => {
      const imageSrc = image || PLACEHOLDER;
      return `<li class="swiper-slide event-item">
        <img
          src="${imageSrc}"
          alt="${name}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${PLACEHOLDER}'"
        />
        <div class="event-info">
          <p class="event-title">${name}</p>
          <p class="event-text">${category.name}</p>
          <p class="event-price">від ${price.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${_id}">
          Детальніше
        </button>
      </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

async function initPopularEvents() {
  try {
    const data = await getPopularEvents();
    const events = data.events;
    renderPopularEvents(events);
    document
      .querySelector('.popular-list')
      .addEventListener('click', handleEventDetailsModal);
    new Swiper('.popular-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      watchOverflow: true,
      navigation: {
        prevEl: '.popular-button-prev',
        nextEl: '.popular-button-next',
      },
      pagination: {
        el: '.popular-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 4, spaceBetween: 32 },
      },
    });
  } catch (error) {
    console.log('error popular events', error);
  }
}

initPopularEvents();
