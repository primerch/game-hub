import platforms from '@/data/platforms';
import type { FetchResponse } from '@/services/api-client';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const apiClient = new APIClient('platforms');
  return useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll<Platform>(),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
