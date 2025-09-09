import type { Platform } from '@/components/PlatformIconList';
import type Genre from './Genre';
import type Publisher from './Publisher';

export default interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
