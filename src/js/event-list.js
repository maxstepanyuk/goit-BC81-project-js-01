import { handleGetEventsByCategory, initEventList } from './common/handlers';
import { refs } from './common/refs';

document.addEventListener('DOMContentLoaded', initEventList);
refs.categoriesListEl.addEventListener('click', handleGetEventsByCategory);
