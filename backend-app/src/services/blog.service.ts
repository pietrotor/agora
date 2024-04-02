import { BlogEntity, BlogResponse } from '@/interfaces/blog.interface';
import axios from 'axios';
import dotenv from 'dotenv';

import { PaginationDto } from 'dtos';
import { PaginationResponse } from '../interfaces';
import BadRequestError from '@/errors/BadRequestError';

dotenv.config();

const getBlogs = async (paginationDto: PaginationDto): Promise<PaginationResponse<BlogEntity>> => {
  const { page = 1, rows = 15 } = paginationDto;
  if ((page * rows) >= 100) {
    throw new BadRequestError({
      code: 400,
      message: "There is only avalibale 100 results"
    })
  }
  const blogsInstances = await axios.get<BlogResponse>(process.env.BLOG_URL_SERVICE!+ '/everything', {
    params: {
      apikey: process.env.BLOG_API_KEY,
      q: 'a',
      page,
      pageSize: rows,
      language: 'es',
    }
  })
  return {
    currentPage: page,
    data: blogsInstances.data.articles,
    message: 'Blogs found',
    rows: rows,
    totalPages: 10,
    totalRecords: blogsInstances.data.totalResults,
  }
};

export { getBlogs };
