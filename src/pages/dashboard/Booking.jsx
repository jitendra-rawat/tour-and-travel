import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import axios from "axios";
import { toast } from "react-toastify";
import {server} from './utils'

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `${server}/booking/get-bookings`
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Mobile Number",
        accessor: "mobileNumber",
      },
      {
        Header: "Email Address",
        accessor: "email",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Tour Name",
        accessor: "tourName",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ row }) => (
          <button
            className="bg-gray-700 px-8 py-2 text-white rounded-lg"
            onClick={() => handleDelete(row.original._id)}
          >
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/booking/delete/${id}`);
      fetchBookings(); 
      toast.success("Booking has been Deleted")
      console.log(`Booking with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting booking with ID ${id}:`, error);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: bookings });

  return (
    <div className="max-w-8xl mx-auto container overflow-auto ">
      <h2 className="font-poppins text-2xl text-center mb-4 font-bold">
        Booking Details
      </h2>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px gray", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    fontFamily: "Poppins",
                    color: "black",
                    fontWeight: "bold",
                    padding: "16px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "20px",
                        border: "solid 1px gray",
                        background: "white",
                        fontSize: "16px",
                        fontFamily: "poppins",
                      }}
                    >
                      {cell.render("Cell")}
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

export default Booking;
