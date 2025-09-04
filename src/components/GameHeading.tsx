import type { GameQuery } from '../App.tsx';

interface Props {
  gameQuery: GameQuery;
}

import genres from '../data/genres.ts';
import platforms from '../data/platforms.ts';

const GameHeading = ({ gameQuery }: Props) => {
  const { platform_id, genre_id } = gameQuery;

  const genre_name = genres.find((genre) => genre.id === genre_id)?.name;
  const platform_name = platforms.find(
    (platform) => platform.id === platform_id,
  )?.name;

  return (
    <h1 className="text-5xl font-bold">{`${platform_name ?? ''} ${genre_name ?? ''} Games`}</h1>
  );
};

export default GameHeading;
