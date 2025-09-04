import useGenres from '@/hooks/useGenres.ts';
import usePlatforms from '@/hooks/usePlatforms.ts';
import type { GameQuery } from '../App.tsx';

interface Props {
  gameQuery: GameQuery;
}

// import genres from '../data/genres.ts';
// import platforms from '../data/platforms.ts';

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const { platform_id, genreId } = gameQuery;

  const genreName = genres?.results.find((genre) => genre.id === genreId)?.name;

  const platformName = platforms.results.find(
    (platform) => platform.id === platform_id,
  )?.name;

  return (
    <h1 className="text-5xl font-bold">{`${platformName ?? ''} ${genreName ?? ''} Games`}</h1>
  );
};

export default GameHeading;
