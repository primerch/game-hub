import type { Genre } from "../hooks/useGenres.ts";

interface Props {
  data: Genre[];
  onSelectedGenre: (genre: string) => void;
  error: string;
  loading: boolean;
}

const GenreList = ({ data, onSelectedGenre, error, loading }: Props) => {
  if (error) return null;
  if (loading) return <span className="loading loading-dots loading-xl"></span>;

  return (
    <>
      {!loading && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {data.map((genre) => (
            <li className="list-row" key={genre.id}>
              <div>
                <img
                  className="rounded-box size-10"
                  src={genre.image_background}
                />
              </div>
              <div>
                <button
                  className="cursor-pointer"
                  onClick={() => onSelectedGenre(genre.slug)}
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
