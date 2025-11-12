import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { PropagateLoader } from "react-spinners";
import usePost from "../hooks/usePost";
import toast from "react-hot-toast";
import { Star } from "lucide-react";
import useGet from "../hooks/useGet";
import Swal from "sweetalert2";
import Comment from "./Comment";

const BookDetails = () => {
  const { data } = useGet("/comments");
  const { error, response, postData } = usePost();
  console.log(data);
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch(`https://the-book-haven-server-six.vercel.app/books/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json()) /* add */
      .then((data) => {
        setBook(data.result);
        setLoading(false);
      });
  }, [user, id, refetch]);

  const handleDownload = async () => {
    const formData = {
      title: book.title,
      author: book.author,
      genre: book.genre,
      rating: book.rating,
      summary: book.summary,
      coverImage: book.coverImage,
      userEmail: user?.email,
      price: book.price,
    };

    const result = await postData(`/downloads/${book.id}`, formData);

    if (result) {
      toast.success("Successfully added!");
      navigate("/my-books");
    }
  };

  const handleComment = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      // Build comment data
      const formData = {
        userName: user?.displayName,
        userPhoto: user?.photoURL,
        userEmail: user?.email,
        comment: text,
        bookId: book._id, // optional if you want to link the comment to a book
        createdAt: new Date(),
      };

      try {
        const result = await postData("/comments", formData);

        if (result?.success) {
          toast.success("Comment added successfully!");
          window.location.reload();
        } else {
          toast.error("Failed to add comment!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
      }
    }
  };

  if ((loading, response)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#842A3B" size={20} speedMultiplier={1.3} />
      </div>
    );
  }

  if (error) return <p>Error loading data</p>;

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
            <button
              onClick={handleDownload}
              className="btn text-white mt-4 rounded-full bg-linear-to-r from-[#662222] to-[#A3485A] "
            >
              Add To My Book
            </button>

            {/* Optional: Action Buttons */}
            {/* <div className="flex flex-col md:flex-row gap-3 mt-6">
              <Link
                to={`/update-book/${book._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-[#662222] to-[#A3485A] text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Book
              </Link> */}

            {/*  <button
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
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <button
        onClick={() => handleComment()}
        className="btn btn-primary mt-5 items-center"
      >
        {" "}
        Add Comment{" "}
      </button>
      {data.map((comments) => (
        <Comment key={comments._id} comments={comments}></Comment>
      ))}
    </div>
  );
};

export default BookDetails;
