import useGenre from '@/hooks/useGenre.ts';
import usePlatform from '@/hooks/usePlatform.ts';
import useGameQueryStore from '@/store';

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);
  
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  return (
    <h1 className="text-5xl font-bold">{`${platform?.name ?? ''} ${genre?.name ?? ''} Games`}</h1>
  );
};

export default GameHeading;
