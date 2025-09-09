import CriticScore from '@/components/CriticScore';
import DefinitionTerm from '@/components/DefinitionTerm';
import ExpandableText from '@/components/ExpandableText';
import useGame from '@/hooks/useGame';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  console.log('🚀 ~ GameDetailPage ~ game:', game);

  if (isLoading) return <div className="loading loading-dots"></div>;

  if (error || !game) throw error;

  return (
    <>
      <h1 className="text-3xl"> {game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>

      <div className="align-center grid justify-center lg:grid-cols-2 xl:grid-cols-4">
        <DefinitionTerm term={'Platforms'}>
          {game.parent_platforms.map((pp) => (
            <p>{pp.platform.name}</p>
          ))}
        </DefinitionTerm>

        <DefinitionTerm term="Metascore">
          <CriticScore metacritic={game.metacritic} />
        </DefinitionTerm>

        <DefinitionTerm term="Genres">
          {game.genres.map((genre) => genre.name)}
        </DefinitionTerm>
        <DefinitionTerm term="Publishers">
          {game.publishers.map((publisher) => (
            <p>{publisher.name}</p>
          ))}
        </DefinitionTerm>
      </div>
    </>
  );
};

export default GameDetailPage;
