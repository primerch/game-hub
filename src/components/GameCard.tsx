import type { Game } from "../hooks/useGames";

const GameCard = ({ name, background_image }: Game) => {
  return (
    <div className="card card-border bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={background_image} alt="Game Background Image" />
      </figure>
      <div className="card-body">
        <div className="card-title">{name}</div>
      </div>
    </div>
  );
};

export default GameCard;
