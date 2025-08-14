import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import useGenres from "../hooks/useGenres.ts";

const GameGrid = () => {
  const { games, loading } = useGames();
  useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {loading &&
        skeletons.map((skeleton) => {
          return (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          );
        })}
      {!loading &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              parent_platforms={game.parent_platforms}
              metacritic={game.metacritic}
            />
          </GameCardContainer>
        ))}
    </div>
  );
};
export default GameGrid;
