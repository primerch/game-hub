import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  console.log("output: ");
  console.log(requestConfig);
  return useQuery<T[]>({
    queryKey: [endpoint],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then((res) => res.data.results),
  });
};

export default useData;
