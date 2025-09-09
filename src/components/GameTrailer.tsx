import useTrailers from '@/hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error) throw error;

  const first = data?.results[0];

  if (!first) return null;

  return (
    <video
      className="w-full"
      poster={first.preview}
      src={first.data[480]}
      controls
      autoPlay
    ></video>
  );
};

export default GameTrailer;
