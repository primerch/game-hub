import genres from "@/data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const staleTime = 24 * 60 * 60 * 1000;
const initialData = genres;

const useGenres = () => {
  return useData<Genre>("/genres", undefined, staleTime, initialData);
};

export default useGenres;
