import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";

const GameCard = ({
  name,
  background_image,
  parent_platforms,
  metacritic,
}: Game) => {
  return (
    <div className="card card-border bg-base-100 m-2.5 shadow-sm">
      <figure>
        <img src={background_image} alt="Game Background Image" />
      </figure>
      <div className="card-body">
        <div className="card-title mb-1 text-2xl">{name}</div>
        <div className="flex items-center justify-between">
          <PlatformIconList parent_platforms={parent_platforms} />
          <CriticScore metacritic={metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
