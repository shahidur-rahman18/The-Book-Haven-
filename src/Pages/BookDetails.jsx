import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { PropagateLoader } from "react-spinners";

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`, {
     /*  headers: {
        authorization: `Bearer ${user.accessToken}`,
      }, */
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data.result);
        setLoading(false);
      });
  }, [user, id, refetch]);

  const handleDownload = () => {};
  const handleDelete = () => {};
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#842A3B" size={20} speedMultiplier={1.3} />
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-5 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={book.coverImage}
              alt=""
              className="w-full object-cover rounded-xl "
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            {/* Title */}
            <h1 className="text-xl md:text-4xl font-bold text-gray-800">
              {book.title}
            </h1>

            {/* Category Badge */}
            <div className="flex flex-col gap-3 ">
              <div className="badge badge-lg badge-outline btn text-amber-950 border-amber-800 font-medium">
                {book.genre} 
              </div>
              <div className="badge badge-lg badge-outline btn text-primary border-primary font-medium">
                Rating: {book.rating}
              </div>
            </div>

            {/* Description */}
            <p className="text-primary font-bold leading-relaxed text-lg md:text-xl">
              $ {book.price}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
              {book.summary}
            </p>

            {/* Optional: Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <Link
                /*  to={`/update-model/${model._id}`} */
                className="btn btn-primary rounded-full bg-linear-to-r from-[#662222] to-[#A3485A] text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Book
              </Link>
              <button
                onClick={handleDownload}
                className="btn btn-secondary rounded-full"
              >
                Download
              </button>

              <button
                onClick={handleDelete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-secondary hover:text-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
