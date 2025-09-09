import ExpandableText from '@/components/ExpandableText';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  console.log('🚀 ~ GameDetailPage ~ game:', game);

  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-3xl"> {game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
