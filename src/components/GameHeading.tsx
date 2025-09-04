import useGenres from '@/hooks/useGenres.ts';
import usePlatforms from '@/hooks/usePlatforms.ts';
import type { GameQuery } from '../App.tsx';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const { platformId, genreId } = gameQuery;

  const genreName = genres?.results.find((genre) => genre.id === genreId)?.name;

  const platformName = platforms.results.find((p) => p.id === platformId)?.name;

  return (
    <h1 className="text-5xl font-bold">{`${platformName ?? ''} ${genreName ?? ''} Games`}</h1>
  );
};

export default GameHeading;
