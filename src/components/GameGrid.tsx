import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";

const GameGrid = () => {
  const { games, setGames, error, setError } = useGames();

  return (
    <>
      {error && <p className="text-error">{error}</p>}

      {/*<ul>*/}
      {/*  {games.map((game) => (*/}
      {/*    <li key={game.id}>*/}
      {/*      <GameCard*/}
      {/*        id={game.id}*/}
      {/*        name={game.name}*/}
      {/*        background_image={game.background_image}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            background_image={game.background_image}
          />
        ))}
      </div>
    </>
  );
};
export default GameGrid;
