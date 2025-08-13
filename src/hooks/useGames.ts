import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client.ts";
import type { Platform } from "../components/PlatformIconList.tsx";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGames(
          results.map((game: Game) => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            parent_platforms: game.parent_platforms,
            metacritic: game.metacritic,
          })),
        );
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError, loading };
};
export default useGames;
