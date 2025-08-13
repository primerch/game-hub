interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const scoreBgColor =
    metacritic >= 90
      ? "text-green-300"
      : metacritic >= 85
        ? "text-yellow-300"
        : "text-red-300";

  return (
    <div
      className={`radial-progress text-xs ${scoreBgColor}`}
      style={
        { "--value": metacritic, "--size": "1.5rem" } as React.CSSProperties
      }
      aria-valuenow={metacritic}
      role="progressbar"
    >
      {metacritic}
    </div>
  );
};
export default CriticScore;
