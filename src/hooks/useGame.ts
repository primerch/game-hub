import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import type { Game } from '../entities/Game';

function useGame(slug: string) {
  const apiClient = new APIClient<Game>('games');

  return useQuery<Game>({
    queryKey: [`games/:${slug}`],
    queryFn: () => apiClient.get(slug),
  });
}

export default useGame;
