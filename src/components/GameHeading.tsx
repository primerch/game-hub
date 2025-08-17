interface Props {
  heading: string | undefined;
}

const GameHeading = ({ heading }: Props) => {
  if (!heading) return;
  return <h1 className="text-9xl">{heading}</h1>;
};

export default GameHeading;
