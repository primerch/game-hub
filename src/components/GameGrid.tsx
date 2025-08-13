import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      {error && <p className="text-error">{error}</p>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
