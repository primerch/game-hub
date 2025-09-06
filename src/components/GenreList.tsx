import useGenres from '@/hooks/useGenres.ts';
import useGameQueryStore from '@/store';

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, error, isPending } = useGenres();

  if (isPending)
    return <span className="loading loading-dots loading-xl"></span>;

  if (error) return null;

  return (
    <>
      <h1 className="mg-3 text-center text-2xl font-bold">Genres</h1>
      {!isPending && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {data?.results.map((genre) => (
            <li className="list-row items-center" key={genre.id}>
              <div>
                <img
                  className="rounded-box size-10"
                  src={genre.image_background}
                />
              </div>
              <div
                className={
                  selectedGenreId === genre.id ? 'font-bold' : 'font-normal'
                }
              >
                <button
                  className="text-left"
                  onClick={() => setSelectedGenreId(genre.id)}
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
