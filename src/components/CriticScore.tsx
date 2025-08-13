interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const criticScoreBg =
    metacritic > 90
      ? "text-green-300"
      : metacritic > 85
        ? "text-yellow-300"
        : "text-red-300";

  // return <span className={criticScoreBg}>{metacritic}</span>;
  const classnames = [criticScoreBg, "radial-progress", "text-xs"];

  return (
    <div
      className={classnames.join(" ")}
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
