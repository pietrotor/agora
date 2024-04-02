/* eslint-disable multiline-ternary */
/* eslint-disable quote-props */
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import newsApi from "@/lib/blogConfig";
import { BlogResponse } from "@/interfaces";
import agora2030 from "@/lib/axiosConfig";

export type TGetNews = {
  page?: number;
  rows?: number;
};

export const getNews = async ({
  page = 1,
  rows = 6,
}: TGetNews): Promise<BlogResponse> => {
  return agora2030
    .get("/blogs", {
      params: {
        page,
        rows,
      },
    })
    .then(({ data }) => data);
};

type TUseSurveysParams = { params: TGetNews };

export const useNews = ({ params }: TUseSurveysParams) => {
  return useInfiniteQuery({
    queryKey: queryKeys.all(params),
    retry: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    queryFn: ({ pageParam }) => getNews({ ...params, page: pageParam }),
  });
};
