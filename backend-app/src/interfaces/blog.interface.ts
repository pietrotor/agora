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

interface BlogResponse {
  status: string;
  totalResults: number;
  articles: BlogEntity[];
}

export type { BlogResponse, BlogEntity };
