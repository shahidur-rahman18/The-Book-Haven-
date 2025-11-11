import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import usePost from "../hooks/usePost";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const AddBook = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { loading, error, response, postData } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      author: e.target.author.value,
      rating: e.target.rating.value,
      genre: e.target.genre.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email,
      price: e.target.price.value,
    };

    const result = await postData("/books", formData);

    if (result) {
      toast.success("Successfully added!");
      navigate("/all-books");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader size={20} speedMultiplier={1.3} />
      </div>
    );
  }

  if (error) return <p>Error loading data</p>;
  if (response) return <p>Book Added Successfully!</p>;

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h1 className="text-xl md:text-3xl font-extrabold text-center text-primary ">
          Add Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter book name"
            />
          </div>
          <div>
            <label className="label font-medium">Author Name</label>
            <input
              type="text"
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
              name="rating"
              required
              min="1"
              max="5"
              step="0.1"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter rating from 1 to 5"
            />
          </div>
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              name="price"
              required
              min="100"
              max="500"
              step="0.1"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price from 100 to 500"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="genre"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Design">Design</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Health">
                Health 
              </option>
              <option value="Adventure">Adventure</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="summary"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="coverImage"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-[#662222] to-[#A3485A] hover:from-amber-600 hover:to-amber-950"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
