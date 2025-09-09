import useGame from '@/hooks/useGame';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div className="loading loading-dots"></div>;
  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-5xl">{game.name}</h1>
      <p>{game.description_raw}</p>
    </>
  );
};

export default GameDetailPage;
