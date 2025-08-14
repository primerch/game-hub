import type { Platform } from "../components/PlatformIconList.tsx";
import useData from "./useData.ts";
import type { Genre } from "./useGenres.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
