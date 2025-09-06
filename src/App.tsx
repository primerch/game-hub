import './App.css';
import GameGrid from './components/GameGrid.tsx';
import GameHeading from './components/GameHeading.tsx';
import GenreList from './components/GenreList.tsx';
import NavBar from './components/NavBar.tsx';
import PlatformSelector from './components/PlatformSelector.tsx';
import SortSelector from './components/SortSelector.tsx';
import useGameQueryStore from './store.ts';

function App() {
  const { gameQuery } = useGameQueryStore();
  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:grid-cols-[200px_1fr] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="[grid-area:nav]">
          <NavBar />
        </div>

        <div className="hidden [grid-area:aside] lg:block">
          <GenreList selectedGenreId={gameQuery.genreId} />
        </div>

        <div className="[grid-area:main]">
          <GameHeading gameQuery={gameQuery} />
          <PlatformSelector selectedPlatformId={gameQuery.platformId} />
          <SortSelector sortOrder={gameQuery.sortOrder} />
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
