import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <p className="text-error">{error}</p>}
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
              <a href="#">{genre.name}</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
