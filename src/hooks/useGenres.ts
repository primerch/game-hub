import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client.ts";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genrses", { signal: controller.signal })
      .then(({ data: { results } }) => {
        setGenres(results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, setGenres, error, setError, loading, setLoading };
};

export default useGenres;
