import usePlatforms from "../hooks/usePlatforms.ts";
import type { Platform } from "./PlatformIconList.tsx";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <details className="dropdown">
      <summary className="btn m-1">Platforms</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {data.map((platform) => (
          <li key={platform.id}>
            <button onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default PlatformSelector;
