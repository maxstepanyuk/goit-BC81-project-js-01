import { all } from 'axios';
import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';
import { refs } from './refs';

export async function initEventList() {
  try {
    const data = await getCategories();
    renderCategories(data);
    const { events } = await getEvents();
    renderEvents(events);
  } catch (error) {
    console.log('error events list', error);
  }
}
export async function handleGetEventsByCategory(event) {
  const categoryItem = event.target.closest('.event-category-item');

  if (!categoryItem) return;
  const categoryClick = categoryItem.dataset.category;

  if (categoryClick === 'all') {
    const { events } = await getEvents();
    refs.eventsList.innerHTML = '';
    renderEvents(events);
  } else {
    const names = await getCategories();
    const data = names.filter(name => name._id === categoryClick);
    const { events } = await getEvents();
    const result = events.filter(event => event.category.name === data[0].name);
    refs.eventsList.innerHTML = '';
    renderEvents(result);
  }
}
