import genres from '@/data/genres';
import type { FetchResponse } from '@/services/api-client';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const staleTime = 24 * 60 * 60 * 1000;

const useGenres = () => {
  const apiClient = new APIClient('genres');
  return useQuery<FetchResponse<Genre>>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll<Genre>(),
    initialData: { count: genres.length, results: genres },
    staleTime: staleTime,
  });
};

export default useGenres;
