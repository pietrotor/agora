interface PaginatedResponse<T> {
  data: T[];
  currentPage: string;
  message: string;
  rows: 20;
  totalPages: number;
  totalRecords: number;
}

export type { PaginatedResponse };
