import useGame from '@/hooks/useGame';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { id } = useParams();

  const { data, isSuccess } = useGame(id);

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
