import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client.ts";

// todo  add error

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: abortController.signal })
      .then(({ data: { results } }) =>
        setGames(
          results.map((result) => ({ id: result.id, name: result.name })),
        ),
      )
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
export default GameGrid;
