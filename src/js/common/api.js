import axios from 'axios';
axios.defaults.baseURL = API_BASE_URL;
import { API_ENDPOINTS, API_BASE_URL } from './constans';

export async function getCategories() {
  const response = await axios.get(API_ENDPOINTS.CATEGORIES);

  return response.data;
}

export async function getEvents(page = 1, categoryId = '') {
  if (categoryId === 'all' || categoryId === undefined) {
    const response = await axios.get(
      `${API_ENDPOINTS.EVENTS}?page=${page}&limit=${API_ENDPOINTS.LIMIT}`
    );
    return response.data;
  } else {
    const response = await axios.get(
      `${API_ENDPOINTS.EVENTS}?page=${page}&limit=${API_ENDPOINTS.LIMIT}&category=${categoryId}`
    );
    return response.data;
  }
}
