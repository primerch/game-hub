import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client.ts";

interface Platform {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGames(
          results.map((result) => ({
            id: result.id,
            name: result.name,
            background_image: result.background_image,
            parent_platforms: result.parent_platforms,
          })),
        );
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError };
};
export default useGames;
