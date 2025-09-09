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
    <>
      <h1 className="text-3xl"> {game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
