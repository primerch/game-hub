import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<GenreResponse>("/genres").then((res) => res.data.results),
  });
};

export default useGenres;
