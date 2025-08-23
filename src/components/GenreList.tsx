import type { Genre } from "@/hooks/useGenres.ts";
import useGenres from "@/hooks/useGenres.ts";
import type { GameQuery } from "../App.tsx";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenreList = ({ gameQuery, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  console.log(data);

  const selectedGenre = gameQuery?.genre;

  if (error) return null;
  if (isLoading)
    return <span className="loading loading-dots loading-xl"></span>;

  return (
    <>
      <h1 className="mg-3 text-center text-2xl font-bold">Genres</h1>
      {!isLoading && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {data?.map((genre) => (
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
                  className="text-left"
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
