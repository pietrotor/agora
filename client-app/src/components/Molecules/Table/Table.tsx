import { TableProps } from './Table.types';
import clsx from 'clsx';

const Table = ({
  content,
  headers,
  totalPages,
  handleChangePage,
  currentPage,
}: TableProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map((rows, idxRow) => (
              <tr
                key={idxRow}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                {rows.map((row, index) => (
                  <td key={index} className="px-6 py-4">
                    {row}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages && currentPage ? (
        <div className="w-full flex justify-center items-center gap-3 h-fit mt-4">
          {Array.from(Array(totalPages).keys()).map((page) => (
            <button
              onClick={() => handleChangePage?.(page + 1)}
              type="button"
              className={clsx(
                'appearance-none outline-none text-white font-semibold text-base px-4 aspect-square rounded-xl transition-all duration-300',
                currentPage === page + 1 ? 'bg-primary' : 'bg-gray-300',
              )}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export { Table };
