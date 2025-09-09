import ExpandableText from '@/components/ExpandableText';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import useTrailer from '@/hooks/useTrailer';
import { useParams } from 'react-router';
import GameAttributes from '../components/GameAttributes';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  const { data } = useTrailer(slug!);

  const trailerUrl = data?.results[0].data[480];

  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-3xl"> {game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer trailer={trailerUrl || ''}></GameTrailer>
    </>
  );
};

export default GameDetailPage;
