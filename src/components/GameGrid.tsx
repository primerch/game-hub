import useGameQueryStore from '@/store.ts';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const {
    data,
    isPending,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames();

  const observeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If there's no next page, or the ref is not yet attached, we do nothing.
    if (!hasNextPage || !observeRef.current) {
      return;
    }

    // IntersectionObserver watches when a DOM element enters the viewport.

    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0].isIntersecting → true when the sentinel div is visible.
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }, // trigger even if 10% of the div is visible (optional tweak for smoother preloading).
    );

    // Attaches the observer to the div referenced by observeRef.
    // From this moment, whenever the div appears in the viewport, the callback above runs.
    observer.observe(observeRef.current);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

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
            {page?.results.map((game) => {
              return (
                <Link
                  key={game.id}
                  to={{
                    pathname: '/games/' + game.id,
                    search: `?slug=${game.slug}`,
                  }}
                >
                  <GameCardContainer>
                    <GameCard
                      id={game.id}
                      name={game.name}
                      background_image={game.background_image}
                      parent_platforms={game.parent_platforms}
                      metacritic={game.metacritic}
                    />
                  </GameCardContainer>
                </Link>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div ref={observeRef} style={{ height: '1px' }}>
        {isFetchingNextPage ? <span>Loading more...</span> : ''}
      </div>
    </>
  );
};
export default GameGrid;
