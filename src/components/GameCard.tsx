import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ name, background_image }: Game) => {
  return (
    <div className="card card-border bg-base-100 m-2.5 shadow-sm">
      <figure>
        <img src={background_image} alt="Game Background Image" />
      </figure>
      <div className="card-body">
        <div className="card-title text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default GameCard;
