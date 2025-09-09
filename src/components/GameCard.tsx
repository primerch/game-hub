import type { Game } from '@/entities/Game.ts';
import getCroppedImageUrl from '../services/image-url.ts';
import CriticScore from './CriticScore.tsx';
import PlatformIconList from './PlatformIconList.tsx';

const GameCard = ({
  name,
  background_image,
  parent_platforms,
  metacritic,
}: Game) => {
  return (
    <>
      <figure>
        <img
          src={getCroppedImageUrl(background_image)}
          alt="Game Background Image"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <PlatformIconList parent_platforms={parent_platforms} />
          <CriticScore metacritic={metacritic} />
        </div>
        <div className="card-title mb-1 text-2xl">{name}</div>
      </div>
    </>
  );
};

export default GameCard;
