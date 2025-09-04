import platforms from '@/data/platforms';
import type { FetchResponse } from '@/services/api-client';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll(),
    initialData: platforms,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
