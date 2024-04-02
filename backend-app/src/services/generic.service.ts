import { Document, Model } from 'mongoose';
import { IPagination } from '../interfaces';

export const getInstancesPagination = async <S extends Document, T extends Model<S>>(db: T, paginationInput: IPagination, args?: object) => {
  const rows = paginationInput.rows || 20;
  const page = paginationInput.page || 1;
  const searchArgs: object = {
    deleted: false,
    ...(args || {}),
  };
  const totalDocuments = await db.find(searchArgs).countDocuments();
  const totalPages = Math.ceil(totalDocuments / rows);
  if (totalPages === 0) {
    return {
      data: [],
      totalRecords: totalDocuments,
      totalPages,
      rows,
      currentPage: page,
    };
  }
  if (page > totalPages) {
    return {
      data: [],
      message: 'The page does not exits',
      totalRecords: totalDocuments,
      totalPages,
      rows,
      currentPage: page,
    };
  }
  if (page === 1) {
    const documents = await db.find(searchArgs).sort({ _id: -1 }).limit(rows);
    return {
      data: documents,
      message: 'Registers found',
      totalRecords: totalDocuments,
      totalPages,
      rows,
      currentPage: page,
    };
  }
  const skipPages = (page - 1) * rows;
  const documents = await db.find(searchArgs).sort({ _id: -1 }).skip(skipPages).limit(rows);
  return {
    data: documents,
    message: 'Registers found',
    totalRecords: totalDocuments,
    totalPages,
    rows,
    currentPage: page,
  };
};
