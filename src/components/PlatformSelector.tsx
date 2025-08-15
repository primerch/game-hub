import usePlatforms from "../hooks/usePlatforms.ts";
import type { Platform } from "./PlatformIconList.tsx";
import type { GameQuery } from "../App.tsx";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: GameQuery["platform"];
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedPlatform?.name || "Platform"}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {data.map((platform) => (
          <li key={platform.id}>
            <button onClick={() => onSelectPlatform(platform)}>
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
