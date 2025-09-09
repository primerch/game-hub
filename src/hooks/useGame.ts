import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

function useGame(id: number) {
  const apiClient = new APIClient(`games/${id}`);

  return useQuery<Game>({
    queryKey: [`games/:${id}`],
    queryFn: () => apiClient.getGame(),
  });
}

export default useGame;
