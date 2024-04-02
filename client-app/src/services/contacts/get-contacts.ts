/* eslint-disable multiline-ternary */
/* eslint-disable quote-props */
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { queryKeys } from './query-keys';
import newsApi from '@/lib/blogConfig';
import { BlogResponse, PaginatedResponse } from '@/interfaces';
import { ContactEntity } from '@/components';
import agora2030 from '@/lib/axiosConfig';

export type TGetContacts = {
  page?: number;
};

export const getContacts = async ({
  page = 1,
}: TGetContacts): Promise<PaginatedResponse<ContactEntity>> => {
  return agora2030
    .get('/contacts', {
      params: {
        page,
        rows: 5,
      },
    })
    .then(({ data }) => data);
};

type TUseSurveysParams = { params: TGetContacts };

export const useContacts = ({ params }: TUseSurveysParams) => {
  return useQuery({
    queryKey: queryKeys.all(params),
    retry: false,
    queryFn: () => getContacts(params),
  });
};
