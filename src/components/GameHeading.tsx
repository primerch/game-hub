interface Props {
  platform: string | undefined;
  genre: string | undefined;
}

const GameHeading = ({ platform, genre }: Props) => {
  if (!platform || !genre) return;
  return <h1 className="text-5xl">{`${platform} ${genre} Game`}</h1>;
};

export default GameHeading;
