import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader, showLoader } from './common/helpers';
import { refs } from './common/refs';

const BASE_URL = 'https://events-store.b.goit.study/api';

export const modalBooking = document.querySelector('.booking-modal');
const closeBtnBooking = document.querySelector('.booking-modal-close-btn');
export const formBooking = document.querySelector('.booking-modal-form');
const submitBtnBooking = document.querySelector('.booking-modal-submit-btn');

const nameInput = formBooking.querySelector('[name="name"]');
const phoneInput = formBooking.querySelector('[name="phone"]');
const commentInput = formBooking.querySelector('[name="comment"]');
const nameError = nameInput
  .closest('.booking-modal-field')
  .querySelector('.booking-modal-error');
const phoneError = phoneInput
  .closest('.booking-modal-field')
  .querySelector('.booking-modal-error');
const commentError = commentInput
  .closest('.booking-modal-field')
  .querySelector('.booking-modal-error');

formBooking.addEventListener('submit', handleFormBookingSubmit);

let currentEventId = null;

export function openBookingModal(eventId) {
  currentEventId = eventId;
  document.body.style.overflow = 'hidden';
  modalBooking.classList.add('is-open');
  document.addEventListener('keydown', handleEscKeyPress);
  closeBtnBooking.addEventListener('click', handleModalCloseBtnBookingClick);
  modalBooking.addEventListener('click', handleBackDropClick);
  allLogicBookingToLocalStorage();
}

export function closeBookingModal() {
  modalBooking.classList.remove('is-open');
  formBooking.reset();
  clearErrors();
  currentEventId = null;
  document.body.style.overflow = '';
  document.body.classList.remove('no-scroll');
  document.removeEventListener('keydown', handleEscKeyPress);
  closeBtnBooking.removeEventListener('click', handleModalCloseBtnBookingClick);
  modalBooking.removeEventListener('click', handleBackDropClick);
}
export function handleEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeBookingModal();
  }
}
export function handleModalCloseBtnBookingClick() {
  closeBookingModal();
}
export function handleBackDropClick(event) {
  if (event.target === modalBooking) {
    closeBookingModal();
  }
}

function validateBooking() {
  const errors = {};
  const name = nameInput.value.trim();
  if (!name) {
    errors.name = "Введіть ваше ім'я";
  } else if (name.length < 2 || name.length > 48) {
    errors.name = "Ім'я має бути від 2 до 48 символів";
  }
  const phone = phoneInput.value.trim().replace(/\D/g, '');
  if (!phone) {
    errors.phone = 'Введіть номер телефону';
  } else if (phone.length !== 12) {
    errors.phone = 'Телефон має містити рівно 12 цифр, напр. 380961234568';
  }
  const comment = commentInput.value.trim();
  if (!comment) {
    errors.comment = 'Введіть коментар';
  } else if (comment.length > 256) {
    errors.comment = `Коментар занадто довгий (максимум 256 символів), а у вас ${comment.length}`;
  }
  return errors;
}

function showErrors(errors) {
  clearErrors();
  if (errors.name) {
    nameInput.classList.add('is-error');
    nameError.textContent = errors.name;
    nameError.classList.add('is-visible');
  }
  if (errors.phone) {
    phoneInput.classList.add('is-error');
    phoneError.textContent = errors.phone;
    phoneError.classList.add('is-visible');
  }
  if (errors.comment) {
    commentInput.classList.add('is-error');
    commentError.textContent = errors.comment;
    commentError.classList.add('is-visible');
  }
}

function clearErrors() {
  nameInput.classList.remove('is-error');
  phoneInput.classList.remove('is-error');
  commentInput.classList.remove('is-error');

  nameError.textContent = '';
  phoneError.textContent = '';
  commentError.textContent = '';

  nameError.classList.remove('is-visible');
  phoneError.classList.remove('is-visible');
  commentError.classList.remove('is-visible');
}

async function handleFormBookingSubmit(event) {
  event.preventDefault();
  const errors = validateBooking();
  if (errors.name || errors.phone || errors.comment) {
    showErrors(errors);
    return;
  }
  clearErrors();
  const formData = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim().replace(/\D/g, ''),
    eventId: currentEventId,
    comment: commentInput.value.trim(),
  };

  try {
    hideSubmitBtnBooking();
    showLoaderBooking();
    submitBtnBooking.disabled = true;
    const { data } = await axios.post(`${BASE_URL}/orders`, formData);
    const { eventName, orderNum } = data;
    iziToast.success({
      message: `Дякуємо! Ви замовили івент до ${eventName}, ваше замовлення №${orderNum}. Очікуйте на зворотній зв'язок.`,
      position: 'topRight',
      timeout: 6000,
    });
    closeBookingModal();
    clearBookingLocalStorage();
  } catch (error) {
    if (error.status === 400) {
      iziToast.error({
        message: 'Помилка запиту',
        position: 'topRight',
        timeout: 6000,
      });
    }
    if (error.status === 404) {
      iziToast.error({
        message: 'Немає такого івенту =(',
        position: 'topRight',
        timeout: 6000,
      });
    }
  } finally {
    showSubmitBtnBooking();
    hideLoaderBooking();
    submitBtnBooking.disabled = false;
  }
}
export function showSubmitBtnBooking() {
  submitBtnBooking.classList.remove('is-hidden');
}
export function hideSubmitBtnBooking() {
  submitBtnBooking.classList.add('is-hidden');
}
// Збереження даних в локал сторідж
const STORAGE_KEY = 'dataBooking';
const formDataBooking = {
  name: '',
  phone: '',
  comment: '',
};
function allLogicBookingToLocalStorage() {
  checkBookingLocalStorageValues();
  formBooking.addEventListener('input', handleFormBookingInput);
}

function checkBookingLocalStorageValues() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storageData) {
    formBooking.elements.name.value = storageData.name;
    formBooking.elements.phone.value = storageData.phone;
    formBooking.elements.comment.value = storageData.comment;
  }
}

function clearBookingLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
  formBooking.name = '';
  formBooking.phone = '';
  formBooking.comment = '';
}

function handleFormBookingInput(event) {
  if (event.target === formBooking.elements.name) {
    formDataBooking.name = event.target.value;
  }
  if (event.target === formBooking.elements.phone) {
    formDataBooking.phone = event.target.value;
  }
  if (event.target === formBooking.elements.comment) {
    formDataBooking.comment = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataBooking));
}
const loaderBooking = document.querySelector('.loader-booking');
export function showLoaderBooking() {
  loaderBooking.classList.remove('is-hidden');
}
export function hideLoaderBooking() {
  loaderBooking.classList.add('is-hidden');
}
