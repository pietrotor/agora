/* eslint-disable multiline-ternary */
/* eslint-disable quote-props */
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from './query-keys';
import newsApi from '@/lib/blogConfig';
import { BlogResponse } from '@/interfaces';

export type TGetNews = {
  page?: number;
  pageSize?: number;
};

export const getNews = async ({
  page = 1,
  pageSize = 15,
}: TGetNews): Promise<BlogResponse> => {
  return newsApi
    .get('/everything', {
      params: {
        page,
        pageSize,
        language: 'es',
        q: 'a',
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
