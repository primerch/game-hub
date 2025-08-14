import "./App.css";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import useGames from "./hooks/useGames.ts";
import useGenres, { type Genre } from "./hooks/useGenres.ts";

function App() {
  const {
    data: games,
    setData: setGames,
    error: gamesError,
    loading: gamesLoading,
  } = useGames();

  const {
    data: genres,
    error: genresError,
    loading: genresLoading,
  } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleOnSelectedGenre = (slug: Genre) => {
    console.log(slug);

    setSelectedGenre(slug);
  };

  const originalGames = [...games];

  const filteredGames = selectedGenre
    ? games.filter((game) =>
        game.genres.some((genre) => genre.slug === selectedGenre.slug),
      )
    : originalGames;

  return (
    <>
      <div className="grid [grid-template-areas:'nav''main'] lg:grid-cols-[200px_1fr] lg:[grid-template-areas:'nav_nav''aside_main']">
        <div className="[grid-area:nav]">
          <NavBar />
        </div>
        <div className="hidden [grid-area:aside] lg:block">
          <GenreList
            onSelectGenre={handleOnSelectedGenre}
            error={genresError}
            loading={genresLoading}
            data={genres}
          />
        </div>
        <div className="[grid-area:main]">
          <GameGrid
            data={filteredGames}
            error={gamesError}
            loading={gamesLoading}
          />
        </div>
      </div>
    </>
  );
}

export default App;
