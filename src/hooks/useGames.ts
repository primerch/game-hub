import type { Platform } from "../components/PlatformIconList.tsx";
import useData from "./useData.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
