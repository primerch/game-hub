import genres from '@/data/genres';
import type { FetchResponse } from '@/services/api-client';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import type Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('genres');

const staleTime = ms('24h');

const useGenres = () => {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll(),
    initialData: genres,
    staleTime: staleTime,
  });
};

export default useGenres;
