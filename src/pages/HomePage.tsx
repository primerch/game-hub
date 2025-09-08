import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <>
      <div className="grid [grid-template-areas:'main'] lg:grid-cols-[200px_1fr] lg:[grid-template-areas:'aside_main']">
        <div className="hidden lg:block lg:[grid-area:aside]">
          <GenreList />
        </div>

        <div className="[grid-area:main]">
          <GameHeading />
          <PlatformSelector />
          <SortSelector />
          <GameGrid />
        </div>
      </div>
    </>
  );
};

export default HomePage;
