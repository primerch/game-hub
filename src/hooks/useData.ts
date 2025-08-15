import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client.ts";
import type { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(({ data: { results } }) => {
          setData(results);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof CanceledError) return;
          setError(e.message);
          setLoading(false);
        });

      // ? : checks truthiness (covers all falsy values).
      // ?? checks specifically for null or undefined.
      return () => controller.abort();

      // can also be :[...(deps ?? [])]
    },
    deps ? [...deps] : [],
  );

  return { data, setData, error, setError, loading, setLoading };
};

export default useData;
