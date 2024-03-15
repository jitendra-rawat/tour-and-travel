import React from 'react';
import { useTable } from 'react-table';

const Messages = () => {
  const data = [
    { id: 1, name: 'John Doe', mobileNumber: '1234567890', email: 'john@example.com', message: 'Hello' },
    { id: 2, name: 'Jane Smith', mobileNumber: '0987654321', email: 'jane@example.com', message: 'Hi there lorem lipsum lorem lipsum' },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobileNumber',
      },
      {
        Header: 'Email Address',
        accessor: 'email',
      },
      {
        Header: 'Message',
        accessor: 'message',
      },
      {
        Header: 'Actions',
        accessor: 'id',
        Cell: ({ row }) => (
          <button className='bg-gray-700 px-8 py-2 text-white rounded-lg' onClick={() => handleDelete(row.original.id)}>Delete</button>
        ),
      },
    ],
    []
  );

  const handleDelete = (id) => {

    console.log(`Deleting message with id ${id}`);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className='max-w-8xl mx-auto container overflow-auto '>
      <h2 className='font-poppins text-2xl text-center mb-4 font-bold'>Messages</h2>
      <table {...getTableProps()} style={{ border: 'solid 1px gray', width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    fontFamily: 'Poppins',
                    color: 'black',
                    fontWeight: 'bold',
                    padding: '16px',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '20px',
                        border: 'solid 1px gray',
                        background: 'white',
                        fontSize: '16px',
                        fontFamily: 'poppins',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
