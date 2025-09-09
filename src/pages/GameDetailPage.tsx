import ExpandableText from '@/components/ExpandableText';
import GameScreenshots from '@/components/GameScreenshots';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error || !game) throw error;

  return (
    <div className="grid lg:grid-cols-2">
      <div className="m-5">
        <h1 className="mb-2 text-3xl font-bold"> {game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div className="m-5">
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
