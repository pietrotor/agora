import { ReactNode } from 'react';

type TableProps = {
  headers: string[];
  content: ReactNode[][];
  totalPages?: number;
  handleChangePage?: (page: number) => void;
  currentPage?: number;
};

export type { TableProps };
