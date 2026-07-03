import { refs } from './refs';

export function renderCategories(allcategories) {
  const categoryList = [
    {
      _id: 'all',
      name: 'Всі події',
      tags: [],
    },
    ...allcategories,
  ];

  const markup = categoryList
    .map(category => {
      return `<li class="event-category-item" data-category="${category._id}">
          <p class="event-category-title">${category.name}</p>
          <p class="event-category-tags">${category.tags.map(tag => `#${tag},`).join(' ')}</p>
        </li>`;
    })
    .join('');

  refs.categoriesListEl.innerHTML = markup;
  const firstCategoryButton = document.querySelector('.categories__btn');
  if (firstCategoryButton) {
    firstCategoryButton.classList.add('categories__btn--active');
  }
}

export function renderEvents(events) {
  const markup = events
    .map(({ _id, name, price, category, image }) => {
      return `<li class="event-item">
        <img
          src="${image}"
          alt=""${name}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${name}</p>
          <p class="event-text">${category.name}</p>
          <p class="event-price">від ${price.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${_id}">Детальніше</button>
      </li>`;
    })
    .join('');
  refs.eventsList.insertAdjacentHTML('beforeend', markup);
}
