import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid.tsx';
import GameHeading from './components/GameHeading.tsx';
import GenreList from './components/GenreList.tsx';
import NavBar from './components/NavBar.tsx';
import PlatformSelector from './components/PlatformSelector.tsx';
import SortSelector from './components/SortSelector.tsx';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: undefined,
    platformId: undefined,
    sortOrder: '',
    search: '',
  });

  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:grid-cols-[200px_1fr] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="[grid-area:nav]">
          <NavBar
            handleOnSubmit={(value) =>
              setGameQuery({ ...gameQuery, search: value })
            }
          />
        </div>

        <div className="hidden [grid-area:aside] lg:block">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </div>

        <div className="[grid-area:main]">
          <GameHeading gameQuery={gameQuery} />
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder: sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
