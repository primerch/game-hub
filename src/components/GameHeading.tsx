import type { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="text-5xl font-bold">{`${gameQuery.platform?.name ?? ""} ${gameQuery.genre?.name ?? ""} Games`}</h1>
  );
};

export default GameHeading;
