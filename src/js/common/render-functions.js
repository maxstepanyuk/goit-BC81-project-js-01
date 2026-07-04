import { getCategoryClass } from './helpers';
import { refs } from './refs';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

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
    .map(({ _id, name, tags }, index) => {
      const dynamicClass = getCategoryClass(categoryList.length, index);
      return `<li class="event-category-item ${dynamicClass}" data-category="${_id}">
          <p class="event-category-title">${name}</p>
          <p class="event-category-tags">${tags.map(tag => `#${tag}, `).join(' ')}</p>
        </li>`;
    })
    .join('');

  refs.categoriesListEl.innerHTML = markup;
  if (refs.firstCategoryButton) {
    refs.firstCategoryButton.classList.add('categories__btn--active');
  }
  if (window.innerWidth < 768 && !refs.categoriesListEl.SimpleBar) {
    new SimpleBar(refs.categoriesListEl, {
      autoHide: false,
    });
  }
}

refs.categoriesListOpenSvgBtn.addEventListener('click', openCategoriesList);
export function openCategoriesList(event) {
  refs.categoriesListOpenSvgBtn.classList.toggle('icon-rotate-rotated');
  refs.categoriesListOpen.classList.toggle('is-hidden');
}

export function renderEvents(events) {
  const markup = events
    .map(({ _id, name, price, category, image }) => {
      return `<li class="event-item">
        <img
          src="${image}"
          alt="${name}"
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
