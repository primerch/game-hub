import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList.tsx";

interface Props {
  game: Game;
}

const GameCard = ({ name, background_image, parent_platforms }: Game) => {
  return (
    <div className="card card-border bg-base-100 m-2.5 shadow-sm">
      <figure>
        <img src={background_image} alt="Game Background Image" />
      </figure>
      <div className="card-body">
        <div className="card-title mb-1 text-2xl">{name}</div>
        <PlatformIconList parent_platforms={parent_platforms} />
      </div>
    </div>
  );
};

export default GameCard;
