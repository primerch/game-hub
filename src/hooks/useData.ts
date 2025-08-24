import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  staleTime?: number,
  initialData?: T[],
) => {
  return useQuery<T[]>({
    queryKey: [endpoint],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then((res) => res.data.results),
    staleTime: staleTime,
    initialData: initialData,
  });
};

export default useData;
