import useScreenshots from '@/hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error) throw error;

  const screenshots = data?.results.map((s) => s.image);

  if (!screenshots) return null;

  return (
    <div className="grid lg:grid-cols-2">
      {screenshots.map((s, idx) => (
        <img
          key={idx}
          src={s}
          alt=""
          className="gap-2 border border-5 border-black"
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
