import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';
import { refs } from './refs';
import { API_ENDPOINTS } from './constans';
import { hideLoader, showLoader } from './helpers';
import { renderEventModal } from '../event-details-modal.js';

let currentPage = 1;
let currentCategory = 'all';

export function checkWidthScreen() {
  return window.innerWidth < 768
    ? API_ENDPOINTS.LIMIT / 2
    : API_ENDPOINTS.LIMIT;
}
export async function initEventList() {
  try {
    showLoader();
    const limit = checkWidthScreen();
    const [data, { events, totalItems }] = await Promise.all([
      getCategories(),
      getEvents(currentPage, currentCategory, limit),
    ]);
    renderCategories(data);
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error events list', error);
  } finally {
    hideLoader();
  }
}
export async function handleGetEventsByCategory(event) {
  const categoryItem = event.target.closest('.event-category-item');
  if (!categoryItem) return;
  try {
    const categoryClick = categoryItem.dataset.category;
    currentCategory = categoryClick;
    currentPage = 1;
    refs.eventsList.innerHTML = '';
    showLoader();
    const limit = checkWidthScreen();
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory,
      limit
    );
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error during getting events by category', error);
  } finally {
    hideLoader();
  }
}
export async function handleShowMoreBtnClick(event) {
  currentPage += 1;
  try {
    showLoader();
    const limit = checkWidthScreen();
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory,
      limit
    );
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error during getting more events by category', error);
    currentPage -= 1;
  } finally {
    hideLoader();
  }
}
export function checkEventsLimit(totalItems) {
  const limit = checkWidthScreen();
  refs.showMoreBtn.disabled = currentPage * limit >= totalItems;
}

export async function handleEventDetailsModal(event) {
  const targetBtn = event.target.closest('.event-details-btn');
  if (!targetBtn) return;

  const eventId = targetBtn.dataset.eventId;
  if (!eventId) return;

  try {
    const eventData = await getEventById(eventId);
    renderEventModal(eventData);

    const modalOverlay = document.querySelector('.event-modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }
  } catch (error) {
    if (typeof iziToast !== 'undefined') {
      iziToast.error({
        title: 'Error',
        message: 'Не вдалося завантажити деталі події.',
        position: 'topRight',
      });
    }
  }
}
