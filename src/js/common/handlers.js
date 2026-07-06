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

function getValidEvents(events) {
  return events.filter(({ image }) => image);
}

async function getValidEventsPage() {
  const limit = checkWidthScreen();
  let validEvents = [];

  while (validEvents.length < limit) {
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory,
      limit
    );

    totalCurrentItems = totalItems;
    validEvents.push(...getValidEvents(events));

    if (currentPage * limit >= totalItems) break;

    if (validEvents.length < limit) {
      currentPage += 1;
    }
  }

  return validEvents.slice(0, limit);
}

export async function initEventList() {
  try {
    showLoader();

    const categories = await getCategories();
    renderCategories(categories);

    currentPage = 1;
    currentCategory = 'all';
    renderedEventsCount = 0;
    refs.eventsList.innerHTML = '';

    const eventsToRender = await getValidEventsPage();

    renderEvents(eventsToRender);
    renderedEventsCount = eventsToRender.length;

    checkEventsLimit();
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
    showLoader();

    currentCategory = categoryItem.dataset.category;
    currentPage = 1;
    renderedEventsCount = 0;
    refs.eventsList.innerHTML = '';

    const eventsToRender = await getValidEventsPage();

    renderEvents(eventsToRender);
    renderedEventsCount = eventsToRender.length;

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

    currentPage += 1;

    const eventsToRender = await getValidEventsPage();

    renderEvents(eventsToRender);
    renderedEventsCount += eventsToRender.length;

    checkEventsLimit();
  } catch (error) {
    console.log('error during getting more events by category', error);
    currentPage -= 1;
  } finally {
    hideLoader();
  }
}

export function checkEventsLimit() {
  refs.showMoreBtn.disabled = renderedEventsCount >= totalCurrentItems;
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
    if (typeof iziToast !== 'undefined') {
      iziToast.error({
        title: 'Error',
        message: 'Не вдалося завантажити деталі події.',
        position: 'topRight',
      });
    }

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
