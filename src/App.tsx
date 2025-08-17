import "./App.css";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { type Genre } from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import type { Platform } from "./components/PlatformIconList.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    search: "",
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
            gameQuery={gameQuery}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </div>

        <div className="[grid-area:main]">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder: sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
          <GameHeading heading={gameQuery.genre?.name} />
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  );
}

export default App;
