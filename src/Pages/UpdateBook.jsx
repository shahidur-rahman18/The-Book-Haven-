import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const UpdateBook = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams(); // get book id from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch book data here instead of using loader
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `https://the-book-haven-server-six.vercel.app/books/${id}`,
          {
            headers: {
              authorization: `Bearer ${user?.accessToken}`,
            },
          }
        );
        setBook(res.data?.result);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load book!");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, user?.accessToken]);

  // ✅ Handle Update Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      rating: e.target.rating.value,
      genre: e.target.genre.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      price: e.target.price.value,
    };

    fetch(`https://the-book-haven-server-six.vercel.app/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user?.accessToken}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully updated!");
        navigate("/my-books");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update book!");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h1 className="text-xl md:text-3xl font-extrabold text-center text-primary">
          Update Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              defaultValue={book?.title}
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="label font-medium">Author Name</label>
            <input
              type="text"
              defaultValue={book?.author}
              name="author"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter author name"
            />
          </div>

          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              defaultValue={book?.rating}
              name="rating"
              required
              min="1"
              max="5"
              step="0.1"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter rating"
            />
          </div>

          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              defaultValue={book?.price}
              name="price"
              required
              min="100"
              max="500"
              step="0.1"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={book?.genre}
              name="genre"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Design / Technical Fiction</option>
              <option value="Plants">Philosophy / Non-Fiction</option>
              <option value="Foods">Science Fiction</option>
              <option value="Home & Living">
                Health / Historical Reflection
              </option>
              <option value="Characters">Adventure</option>
              <option value="Space">Romance</option>
              <option value="Animals">Fantasy</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={book?.summary}
              name="summary"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="coverImage"
              defaultValue={book?.coverImage}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-[#662222] to-[#A3485A] hover:from-amber-600 hover:to-amber-950"
          >
            Update Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
