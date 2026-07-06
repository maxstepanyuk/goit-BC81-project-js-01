import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';
import { refs } from './refs';
import { API_ENDPOINTS } from './constans';
import { hideLoader, showLoader } from './helpers';
import { renderEventModal, getEventById } from '../event-details-modal.js';
import { openBookingModal } from '../booking-modal.js';

let currentPage = 1;
let currentCategory = 'all';
let renderedEventsCount = 0;
let totalCurrentItems = 0;

export function checkWidthScreen() {
  return window.innerWidth < 768
    ? API_ENDPOINTS.LIMIT / 2
    : API_ENDPOINTS.LIMIT;
}

export async function initEventList() {
  try {
    showLoader();

    const limit = checkWidthScreen();

    const [categories, data] = await Promise.all([
      getCategories(),
      getEvents(currentPage, currentCategory, limit),
    ]);

    renderCategories(categories);

    refs.eventsList.innerHTML = '';
    renderEvents(data.events);

    renderedEventsCount = data.events.length;
    totalCurrentItems = data.totalItems;

    checkEventsLimit();
  } catch (error) {
    console.log('error events list', error);
  } finally {
    hideLoader();
  }
}

export async function handleGetEventsByCategory(event) {
  refs.showMoreBtn.classList.add('is-hidden-btn-more');
  const categoryItem = event.target.closest('.event-category-item');
  if (!categoryItem) return;

  try {
    showLoader();

    currentCategory = categoryItem.dataset.category;
    currentPage = 1;
    renderedEventsCount = 0;
    refs.eventsList.innerHTML = '';

    const limit = checkWidthScreen();
    const data = await getEvents(currentPage, currentCategory, limit);

    renderEvents(data.events);

    renderedEventsCount = data.events.length;
    totalCurrentItems = data.totalItems;

    checkEventsLimit();
  } catch (error) {
    console.log('error during getting events by category', error);
  } finally {
    hideLoader();
  }
}

export async function handleShowMoreBtnClick() {
  try {
    showLoader();
    refs.showMoreBtn.disabled = true;

    currentPage += 1;

    const limit = checkWidthScreen();
    refs.showMoreBtn.style.opacity = '0';
    const data = await getEvents(currentPage, currentCategory, limit);

    if (!data.events.length) {
      refs.showMoreBtn.disabled = true;
      return;
    }

    renderEvents(data.events);

    renderedEventsCount += data.events.length;
    totalCurrentItems = data.totalItems;

    checkEventsLimit();
  } catch (error) {
    console.log('error during getting more events by category', error);
    currentPage -= 1;
  } finally {
    hideLoader();
    refs.showMoreBtn.style.opacity = '1';
  }
}

// export function checkEventsLimit() {
//   refs.showMoreBtn.disabled = renderedEventsCount >= totalCurrentItems;
// }

// export function checkEventsLimit() {
//   if (renderedEventsCount >= totalCurrentItems) {
//     refs.showMoreBtn.classList.add('is-hidden');
//   } else {
//     refs.showMoreBtn.classList.remove('is-hidden');
//   }
// }
export function checkEventsLimit() {
  refs.showMoreBtn.classList.remove('is-hidden-btn-more');

  if (renderedEventsCount >= totalCurrentItems) {
    refs.showMoreBtn.disabled = true;
  } else {
    refs.showMoreBtn.disabled = false;
  }
}

export async function handleEventDetailsModal(event) {
  const targetBtn = event.target.closest('.event-details-btn');
  if (!targetBtn) return;

  const eventId = targetBtn.dataset.eventId;
  if (!eventId) return;

  try {
    const eventData = await getEventById(eventId);
    renderEventModal(eventData);

    const modalSection = document.querySelector('.section.event-details-modal');
    const modalOverlay = document.querySelector('.event-modal-overlay');

    if (modalSection && modalOverlay) {
      modalSection.classList.remove('is-hidden');
      modalOverlay.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }

    modalOverlay.addEventListener('click', handleModalCloseClick);
    window.addEventListener('keydown', handleEscapePress);

    const orderBtn = modalOverlay.querySelector('.modal-event__order-btn');
    if (orderBtn) {
      orderBtn.addEventListener('click', handleOrderButtonClick);
    }
  } catch (error) {
    console.log('error during opening event modal', error);
  }
}

function handleModalCloseClick(event) {
  const modalOverlay = document.querySelector('.event-modal-overlay');

  const isCloseBtn =
    event.target.hasAttribute('data-modal-close') ||
    event.target.classList.contains('modal-close-btn');

  const isOverlay = event.target === modalOverlay;

  if (isCloseBtn || isOverlay) {
    closeEventDetailsModal();
  }
}

function handleEscapePress(event) {
  if (event.code === 'Escape') {
    closeEventDetailsModal();
  }
}

function closeEventDetailsModal() {
  const modalSection = document.querySelector('.section.event-details-modal');
  const modalOverlay = document.querySelector('.event-modal-overlay');

  if (modalSection && modalOverlay) {
    modalSection.classList.add('is-hidden');
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');

    modalOverlay.removeEventListener('click', handleModalCloseClick);
    window.removeEventListener('keydown', handleEscapePress);

    const modalContainer = modalOverlay.querySelector('.modal-product');
    if (modalContainer) {
      modalContainer.innerHTML = '';
    }
  }
}
function handleOrderButtonClick(event) {
  const eventId = event.currentTarget.dataset.eventId;

  const modalSection = document.querySelector('.section.event-details-modal');
  const modalOverlay = document.querySelector('.event-modal-overlay');

  if (modalSection && modalOverlay) {
    modalSection.classList.add('is-hidden');
    modalOverlay.classList.remove('is-open');

    modalOverlay.removeEventListener('click', handleModalCloseClick);
    window.removeEventListener('keydown', handleEscapePress);

    const modalContainer = modalOverlay.querySelector('.modal-product');
    if (modalContainer) {
      modalContainer.innerHTML = '';
    }
  }
  openBookingModal(eventId);

  const bookingSection = document.querySelector('.section.booking-modal');

  if (bookingSection) {
    bookingSection.classList.remove('is-hidden');
    bookingSection.classList.add('is-open');
    document.body.classList.add('no-scroll');

    const form = bookingSection.querySelector('.booking-modal_form');

    if (form) {
      let hiddenInput = form.querySelector('input[name="eventId"]');

      if (!hiddenInput) {
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'eventId';
        form.appendChild(hiddenInput);
      }

      hiddenInput.value = eventId;
    }
  }
}
