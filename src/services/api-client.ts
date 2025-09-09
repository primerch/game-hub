import type { Trailer } from '@/entities/Trailer';
import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1cbdb12bb7b94512b3428b28369ff52c',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  get(id: string | number) {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  }
  getTrailer(id: string | number) {
    return axiosInstance
      .get<FetchResponse<Trailer>>(this.endpoint + '/' + id + '/' + 'movies')
      .then((res) => res.data);
  }
}

export default APIClient;
