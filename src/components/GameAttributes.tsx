import CriticScore from '@/components/CriticScore';
import DefinitionItem from '@/components/DefinitionItem';
import type Game from '@/entities/Game';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <DefinitionItem term={'Platforms'}>
        {game.parent_platforms?.map(({ platform }) => (
          <p key={platform.id}>{platform.name}</p>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore metacritic={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p>{genre.name}</p>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <p key={publisher.id}>{publisher.name}</p>
        ))}
      </DefinitionItem>
    </div>
  );
};

export default GameAttributes;
