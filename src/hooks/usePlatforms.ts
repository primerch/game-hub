import platforms from '@/data/platforms';
import type { FetchResponse } from '@/services/api-client';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import type Platform from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll(),
    initialData: platforms,
    staleTime: ms('24h'),
  });
};

export default usePlatforms;
