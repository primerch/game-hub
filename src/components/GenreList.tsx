import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <p className="text-error">{error}</p>}
      <ul className="list bg-base-100 rounded-box shadow-md">
        {data.map((genre) => (
          <li key={genre.id}>
            <li className="list-row">
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
