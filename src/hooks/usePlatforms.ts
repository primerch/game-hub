import platforms from '@/data/platforms.ts';
import useData from './useData.ts';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const staleTime = 24 * 60 * 60 * 1000;
const usePlatforms = () =>
  useData<Platform>(
    '/platforms/lists/parents',
    undefined,
    staleTime,
    platforms,
  );

export default usePlatforms;
