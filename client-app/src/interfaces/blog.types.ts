import { PaginatedResponse } from "./generic.types";

interface BlogEntity {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface BlogResponse extends PaginatedResponse<BlogEntity> {}

export type { BlogResponse, BlogEntity };
