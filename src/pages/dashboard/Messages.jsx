import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { toast } from 'react-toastify';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/message/get-message');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [messages]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/message/delete/${id}`);
      setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
      toast.success('Message deleted successfully!');
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message. Please try again.');
    }
  };

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
          <button className='bg-gray-700 px-8 py-2 text-white rounded-lg' onClick={() => handleDelete(row.original._id)}>Delete</button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: messages });

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
