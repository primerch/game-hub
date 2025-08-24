import type { GameQuery } from "../App.tsx";
import type { Platform } from "../components/PlatformIconList.tsx";
import useData from "./useData.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.search,
    },
  });
};

export default useGames;
