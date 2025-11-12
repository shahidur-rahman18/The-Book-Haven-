import PropagateLoader from "react-spinners/PropagateLoader";
import useGet from "../hooks/useGet";
import BookCard from "./BookCard";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TableBook from "../components/TableBook";
import { FcRating } from "react-icons/fc";
import { FaStar } from "react-icons/fa6";
import { use, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const AllBooks = () => {
  const { data, loading, error, setUrl } = useGet("/books");
  const [searchResults, setSearchResults] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("none");
  const { user } = use(AuthContext);

  //  Function to filter and sort data by rating
  const getFilteredAndSortedData = () => {
    let result = [...data];

    if (ratingFilter === "ascending") {
      result.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    } else if (ratingFilter === "descending") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  };

  const displayData =
    ratingFilter === "none" ? data : getFilteredAndSortedData();

  const handleSearch = async (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    if (search_text.trim()) {
      try {
        const res = await axios.get(
          `https://the-book-haven-server-six.vercel.app/search?search=${encodeURIComponent(
            search_text
          )}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        setSearchResults(res.data); // store secure search results
      } catch (err) {
        console.error(err);
        toast.error("Unauthorized or failed to fetch data");
      }
    } else {
      // if empty search, show all books again
      setSearchResults([]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#842A3B" size={20} speedMultiplier={1.3} />
      </div>
    );
  }
  if (error) return <p>Error loading data</p>;
  return (
    <div>
      <div className="text-2xl md:text-4xl text-primary text-center font-bold">
        {" "}
        All Books
      </div>
      <p className=" text-center mb-10 ">Explore Books.</p>

      {/* CHANGE 4: Add filter dropdown section for rating sort */}
      <div className="px-2 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
          <label className="input rounded-full flex-1 md:flex-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>

          <button className="btn btn-secondary rounded-full">
            {loading ? "Searching...." : "Search"}
          </button>
        </form>

        {/*  Add rating filter dropdown */}
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="select bg-primary cursor-pointer rounded-full text-amber-100 w-full md:w-auto"
        >
          <option value="none">Filter by Rating</option>
          <option value="ascending">Rating: Low to High</option>
          <option value="descending">Rating: High to Low</option>
        </select>
      </div>

      <motion.div
        initial={{ y: 80, opacity: 1 }}
        animate={{ y: 2, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="overflow-x-auto mt-5"
      >
        {/* Desktop Table */}
        <div className="hidden bg-base-100 rounded-2xl shadow-2xl md:block">
          <table className="table rounded-full table-zebra w-full">
            <thead>
              <tr>
                <th>Book Details</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/*  Use displayData instead of data to show filtered results */}
              {displayData.map((book) => (
                <TableBook key={book._id} book={book} tableFormat={true} />
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {/* CHANGE 7: Use displayData instead of data to show filtered results on mobile */}
          {displayData.map((book) => (
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
                    <div className="flex justify-between gap-5 items-center mt-2">
                      <span className="badge badge-outline text-xs p-5 ">
                        {book.genre || "General"}
                      </span>
                      <span className="font-bold">
                        <FaStar color="#FFD700" /> {book.rating || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-end mt-3">
                  <Link
                    to={`/book-details/${book._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AllBooks;

/*      <motion.div
        initial={{ y: 80, opacity: 1 }}
        animate={{ y: 2, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mt-5"
      >
        {data.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </motion.div> */
