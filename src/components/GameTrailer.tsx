import useTrailers from '@/hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailers(gameId);

  const trailerUrl = data?.results[0].data[480];

  return <video className="w-full" src={trailerUrl} controls autoPlay></video>;
};

export default GameTrailer;
