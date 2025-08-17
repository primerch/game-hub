import useGenres, { type Genre } from "../hooks/useGenres.ts";
import type { GameQuery } from "../App.tsx";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenreList = ({ gameQuery, onSelectGenre }: Props) => {
  const { data, error, loading } = useGenres();

  const selectedGenre = gameQuery?.genre;

  if (error) return null;
  if (loading) return <span className="loading loading-dots loading-xl"></span>;

  return (
    <>
      {!loading && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {data.map((genre) => (
            <li className="list-row items-center" key={genre.id}>
              <div>
                <img
                  className="rounded-box size-10"
                  src={genre.image_background}
                />
              </div>
              <div
                className={
                  selectedGenre?.id === genre.id ? "font-bold" : "font-normal"
                }
              >
                <button
                  className="cursor-pointer text-left"
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GenreList;
