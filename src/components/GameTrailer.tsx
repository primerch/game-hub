interface Props {
  trailer: string;
}

const GameTrailer = ({ trailer: preview }: Props) => {
  return <video className="w-full" src={preview} controls autoPlay></video>;
};

export default GameTrailer;
