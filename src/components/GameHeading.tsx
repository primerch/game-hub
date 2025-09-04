import useGenre from '@/hooks/useGenre.ts';
import usePlatform from '@/hooks/usePlatform.ts';
import type { GameQuery } from '../App.tsx';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  return (
    <h1 className="text-5xl font-bold">{`${platform?.name ?? ''} ${genre?.name ?? ''} Games`}</h1>
  );
};

export default GameHeading;
