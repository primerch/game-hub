import APIClient from '@/services/api-client.ts';
import useGameQueryStore from '@/store.ts';
import { useInfiniteQuery } from '@tanstack/react-query';
import type Game from '../entities/Game.ts';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const page_size = 12;

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
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
