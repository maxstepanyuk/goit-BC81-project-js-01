import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';

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
