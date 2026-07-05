import axios from 'axios';
import iconsUrl from '../img/sprite.svg';

const BASE_URL = 'https://events-store.b.goit.study';

export async function getEventById(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/events/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export function renderEventModal(event) {
  const modalContainer = document.querySelector('.modal-product');
  if (!modalContainer) return;

  const {
    _id,
    name,
    description,
    image,
    durationHours,
    rate,
    price,
    audience,
    category,
    program,
    inclusions
  } = event;

  let starsMarkup = '';
  const fullStars = Math.floor(rate);
  const remainder = rate - fullStars;
  const hasHalfStar = remainder >= 0.25 && remainder < 0.75;
  const totalIconsCalculated = fullStars + (hasHalfStar ? 1 : (remainder >= 0.75 ? 1 : 0));

  for (let i = 0; i < fullStars; i += 1) {
    starsMarkup += `
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${iconsUrl}#icon-full-star"></use>
      </svg>
    `;
  }

  if (remainder >= 0.75) {
    starsMarkup += `
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${iconsUrl}#icon-full-star"></use>
      </svg>
    `;
  } else if (hasHalfStar) {
    starsMarkup += `
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${iconsUrl}#icon-half-star"></use>
      </svg>
    `;
  }

  for (let i = totalIconsCalculated; i < 5; i += 1) {
    starsMarkup += `
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${iconsUrl}#icon-star"></use>
      </svg>
    `;
  }

  const programList = program.map(step => `<li>${step}</li>`).join('');
  const inclusionsList = inclusions.map(item => `<li>${item}</li>`).join('');

  const markup = `
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${image}" alt="${name}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${category.name}</span>
          <div class="modal-event__stars">${starsMarkup}</div>
        </div>
        
        <h2 class="modal-event__title">${name}</h2>
        <p class="modal-event__desc">${description}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${programList}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${inclusionsList}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${durationHours} години</p>
          <p><b>Кількість учасників:</b> від ${audience.min} до ${audience.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${price.prefix} ${price.value} ${price.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${_id}">Замовити івент</button>
      </div>
    </div>
  `;

  modalContainer.innerHTML = markup;
}

