import type { GameQuery } from '@/App.tsx';
import APIClient from '@/services/api-client.ts';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Platform } from '../components/PlatformIconList.tsx';

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
  const page_size = 12;

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre_id,
          parent_platforms: gameQuery.platform_id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
          page: pageParam,
          page_size,
        },
      }),
    getNextPageParam: (lastPages, allPages) => {
      return lastPages.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
