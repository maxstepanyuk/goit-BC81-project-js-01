import {
  handleGetEventsByCategory,
  handleShowMoreBtnClick,
  initEventList,
  handleEventDetailsModal,
} from './common/handlers';
import { refs } from './common/refs';

document.addEventListener('DOMContentLoaded', initEventList);
refs.categoriesListEl.addEventListener('click', handleGetEventsByCategory);
refs.showMoreBtn.addEventListener('click', handleShowMoreBtnClick);
refs.eventsList.addEventListener('click', handleEventDetailsModal);
