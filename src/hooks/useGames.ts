import type { Platform } from "../components/PlatformIconList.tsx";
import useData from "./useData.ts";
import type { Genre } from "./useGenres.ts";

export interface Game {
  genres: Genre[];
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  const { data, loading, error } = useData<Game>("/games");

  const selectedGames = selectedGenre
    ? data.filter((game) =>
        game.genres.some((genre) => genre.slug === selectedGenre.slug),
      )
    : data;

  return { selectedGames, loading, error };
};

export default useGames;
