import React from 'react';
import type { GameQuery } from '../App.tsx';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isPending,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (isPending)
    return (
      <>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </div>
      </>
    );

  if (isError) return <span className="text-error">{error.message}</span>;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard
                  id={game.id}
                  name={game.name}
                  background_image={game.background_image}
                  parent_platforms={game.parent_platforms}
                  metacritic={game.metacritic}
                />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <button
          className="btn ml-2"
          disabled={!hasNextPage}
          onClick={() => {
            fetchNextPage();
          }}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </>
  );
};
export default GameGrid;
