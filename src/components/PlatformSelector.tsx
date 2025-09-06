import usePlatform from '@/hooks/usePlatform.ts';
import useGameQueryStore from '@/store.ts';
import usePlatforms from '../hooks/usePlatforms.ts';

const PlatformSelector = () => {
  const { data, isError } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (isError) return null;

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedPlatform?.name ?? 'Platform'}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {data?.results.map((platform) => (
          <li key={platform.id}>
            <button onClick={() => setSelectedPlatformId(platform.id)}>
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
