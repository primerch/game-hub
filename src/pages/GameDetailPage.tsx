import useGame from '@/hooks/useGame';
import { useParams, useSearchParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();

  const [searchParams] = useSearchParams();

  const gameId = parseInt(searchParams.get('id'));
  const { data, isSuccess } = useGame(gameId);

  if (isSuccess)
    return (
      <>
        <h1 className="text-5xl">{data.name}</h1>
        <p>{data.description_raw}</p>
      </>
    );

  return <></>;
};

export default GameDetailPage;
