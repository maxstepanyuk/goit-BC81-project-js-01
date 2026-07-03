import axios from 'axios';
axios.defaults.baseURL = API_BASE_URL;
import { API_ENDPOINTS, API_BASE_URL } from './constans';

export async function getCategories() {
  const response = await axios.get(API_ENDPOINTS.CATEGORIES);

  return response.data;
}

export async function getEvents() {
  const response = await axios.get(API_ENDPOINTS.EVENTS);

  return response.data;
}
