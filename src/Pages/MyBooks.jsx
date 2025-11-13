import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PropagateLoader } from "react-spinners";
import MyBooksTable from "./MyBooksTable";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";


const MyBooks = () => {
  const { user } = use(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://the-book-haven-server-six.vercel.app/books?email=${user.email} `,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#A3485A ",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://the-book-haven-server-six.vercel.app/books/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setBooks((prevBooks) =>
              prevBooks.filter((book) => book._id !== id)
            );

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };


  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          📚 No books found!
        </h2>
        <p className="text-gray-500 mt-2">
          You haven’t added any books yet.
        </p>
        <Link
          to="/add-book"
          className="btn btn-primary mt-4 rounded-full px-6"
        >
          Add Your First Book
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#dc143c" size={20} speedMultiplier={1.3} />
      </div>
    );
  }
  return (  
 
    (<div>
      {/* Desktop Table */}
      <div className="hidden bg-base-100 rounded-2xl shadow-2xl md:block">
        {books.map((book) => (
          <MyBooksTable
            key={book._id}
            book={book}
            handleDelete={handleDelete}
            tableFormat={true}
          />
        ))}
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {books.map((book) => (
          <div key={book._id} className="card bg-base-100 shadow-xl  ">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="mask bg-base-100 rounded-xl h-20 w-16">
                    <img
                      src={book.coverImage || "/default-book-cover.jpg"}
                      alt={book.title}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-600">
                    by {book.author || "Unknown Author"}
                  </p>
                </div>
              </div>
              <div className="card-actions justify-end mt-3">
                <Link
                  onClick={() => handleDelete(book._id)}
                  className="btn btn-primary btn-sm"
                >
                  Delete
                </Link>
                <Link
                  to={`/update-book/${book._id}`}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)

   
  );
};

export default MyBooks;
