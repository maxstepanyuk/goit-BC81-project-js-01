import axios from 'axios';
import { API_ENDPOINTS, API_BASE_URL } from './constans';
axios.defaults.baseURL = API_BASE_URL;

export async function getCategories() {
  const response = await axios.get(API_ENDPOINTS.CATEGORIES);
  return response.data;
}

export async function getEvents(
  page = 1,
  categoryId = '',
  limit = API_ENDPOINTS.LIMIT
) {
  if (categoryId === 'all' || !categoryId) {
    const response = await axios.get(
      `${API_ENDPOINTS.EVENTS}?page=${page}&limit=${limit}`
    );
    return response.data;
  } else {
    const response = await axios.get(
      `${API_ENDPOINTS.EVENTS}?page=${page}&limit=${limit}&category=${categoryId}`
    );
    return response.data;
  }
}
