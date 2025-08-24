// import { useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client.ts";
// import type { AxiosRequestConfig } from "axios";

import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

// interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: unknown[] | undefined,
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       setLoading(true);
//       const controller = new AbortController();

//       apiClient
//         .get<FetchResponse<T>>(endpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then(({ data: { results } }) => {
//           //
//           setData(results);
//           setLoading(false);
//         })
//         .catch((e) => {
//           if (e instanceof CanceledError) return;
//           setError(e.message);
//           setLoading(false);
//         });

//       // ? : checks truthiness (covers all falsy values: false, 0, "", null, undefined, NaN).
//       // ?? checks specifically for null or undefined.
//       // ?. accesses a property or calls a method only if the value before it is not null or undefined; otherwise, it returns undefined.
//       return () => controller.abort();

//       // can also be :[...(deps ?? [])]
//     },
//     deps ? [...deps] : [],
//   );

//   return { data, setData, error, setError, loading, setLoading };
// };

// export default useData;

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  return useQuery<T[]>({
    queryKey: [endpoint],
    queryFn: () =>
      apiClient.get<FetchResponse<T>>(endpoint).then((res) => res.data.results),
  });
};

export default useData;
