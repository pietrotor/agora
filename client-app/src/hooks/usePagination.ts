import { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleGoToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    handleGoToPage,
    currentPage,
  };
};

export { usePagination };
