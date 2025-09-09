import type { Trailer } from '@/entities/Trailer';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: [`games${gameId}`, 'trailer'],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailers;
