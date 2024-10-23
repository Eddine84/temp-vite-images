import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./utils/utils";

export const useFetchImages = (text) => {
  return useQuery({
    queryKey: ["images", text],
    queryFn: async () => {
      const result = await customFetch(
        `/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${text}`
      );
      console.log(import.meta.env.VITE_API_KEY);
      return result.data;
    },
  });
};
