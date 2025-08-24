import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// export default axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: '1cbdb12bb7b94512b3428b28369ff52c',
//   },
// });

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1cbdb12bb7b94512b3428b28369ff52c',
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(gameQuery?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, gameQuery)
      .then((res) => res.data);
  }
}

export default APIClient;
