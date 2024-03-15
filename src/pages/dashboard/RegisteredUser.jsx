import React from 'react';
import { useTable } from 'react-table';

const RegisteredUser = () => {
  const data = [
    { id: 1, name: 'John Doe', mobileNumber: '1234567890', email: 'john@example.com', message: 'Hello' },
    { id: 2, name: 'Jane Smith', mobileNumber: '0987654321', email: 'jane@example.com', message: 'Hi there lorem lipsum lorem lipsum' },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'User Email',
        accessor: 'email',
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
      <h2 className='font-poppins text-2xl text-center mb-4 font-bold'>Registered Users</h2>
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
                        width:'100%'
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

export default RegisteredUser;
