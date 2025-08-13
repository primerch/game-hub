import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      {error && <p className="text-error">{error}</p>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <GameCard
              id={game.id}
              name={game.name}
              background_image={game.background_image}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
