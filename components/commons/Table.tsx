export interface Column<T> {
  Header: string;
  accessor: keyof T;
  Cell?: React.FC<{ value: any; row: T }>;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.accessor)}
                  scope="col"
                  className="px-6 py-3"
                >
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={String(column.accessor)} className="px-6 py-4">
                    {column.Cell ? (
                      <column.Cell value={row[column.accessor]} row={row} />
                    ) : (
                      String(row[column.accessor])
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!data.length && (
          <p className="text-center text-gray-400 my-10">Tidak ada data</p>
        )}
      </div>
    </div>
  );
};

export default Table;
