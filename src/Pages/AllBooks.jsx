import PropagateLoader from "react-spinners/PropagateLoader";
import useGet from "../hooks/useGet";
import BookCard from "./BookCard";

const AllBooks = () => {
  const { data, loading, error, setUrl, refetch } = useGet("/books");
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    // console.log(search_text)
    setUrl(`/search?search=${encodeURIComponent(search_text)}`);
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
      <div className="text-2xl text-center font-bold"> All Books</div>
      <p className=" text-center mb-10 ">Explore Books.</p>
      <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 px-2 justify-center"
      >
        <label className="input rounded-full ">
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

        <button className="btn btn-secondary  rounded-full">
          {loading ? "Searching...." : "Search"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 mt-5">
        {data.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
