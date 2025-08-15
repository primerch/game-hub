import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {
  const { data, loading, error } = usePlatforms();
  console.log(data);

  const platforms = data.filter((platform) => ({
    name: platform.name,
    slug: platform.slug,
  }));

  const platform_names = platforms.map((platform) => platform.name);
  console.log(platform_names);

  return (
    <details className="dropdown">
      <summary className="btn m-1">Platforms</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {platform_names.map((platform_name) => (
          <li key={platform_name}>
            <a href="">{platform_name}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};
export default PlatformSelector;
