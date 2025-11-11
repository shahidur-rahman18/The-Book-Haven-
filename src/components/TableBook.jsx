import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const TableBook = ({ book, tableFormat = false }) => {
  const { _id } = book;
  
  if (tableFormat) {
    return (
      <tr> 
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask bg-base-100 rounded-2xl h-12 w-12">
                <img
                  src={book.coverImage || "/default-book-cover.jpg"}
                  alt={book.title}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{book.title}</div>
              <div className="text-sm opacity-50">
                {book.author || "Unknown Author"}
              </div>
            </div>
          </div>
        </td>
        <td>{book.author}</td>
        <td>{book.genre || "General"}</td>
        <td className="font-semibold"><FaStar color="#FFD700" /> {book.rating || "N/A"}</td>
        <td>
          <Link
            to={`/book-details/${_id}`}
            className="btn btn-primary btn-xs"
          >
            Details
          </Link>
        </td>
      </tr>
    );
  }

  // Your original BookCard grid layout here
  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Your original BookCard content */}
    
    </div>
  );
};

export default TableBook;