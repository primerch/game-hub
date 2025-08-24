import genres from '@/data/genres';
import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import type { FetchResponse } from './useData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const staleTime = 24 * 60 * 60 * 1000;

const useGenres = () => {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: staleTime,
  });
};

export default useGenres;
