import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
