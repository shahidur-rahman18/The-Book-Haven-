import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const AddBook = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h1 className="text-xl md:text-3xl font-extrabold text-center text-primary ">
          Add Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter book name"
            />
          </div>
          <div>
            <label className="label font-medium">Author Name</label>
            <input
              type="text"
              name="author_name"
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

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
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

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
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
              name="thumbnail"
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
