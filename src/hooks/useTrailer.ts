import type { Trailer } from '@/entities/Trailer';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

const useTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>('games');

  return useQuery({
    queryKey: [`games${slug}`, 'trailer'],
    queryFn: () => apiClient.getTrailer(slug),
  });
};

export default useTrailer;
