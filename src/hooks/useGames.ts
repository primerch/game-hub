import type { GameQuery } from '@/App.tsx';
import type { FetchResponse } from '@/services/api-client.ts';
import APIClient from '@/services/api-client.ts';
import { useQuery } from '@tanstack/react-query';
import type { Platform } from '../components/PlatformIconList.tsx';

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient('/games');

  return useQuery<FetchResponse<Game>>({
    queryKey: ['games', gameQuery],

    queryFn: () =>
      apiClient.getAll<Game>({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
        },
      }),
  });
};

export default useGames;
