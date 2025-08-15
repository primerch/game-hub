import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <details className="dropdown">
      <summary className="btn m-1">Platforms</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {data.map((platform) => (
          <li key={platform.id}>
            <button>{platform.name}</button>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default PlatformSelector;
