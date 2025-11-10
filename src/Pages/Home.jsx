import { PiFlagBanner } from "react-icons/pi";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import BookCard from "./BookCard";
import useGet from "../hooks/useGet";

const Home = () => {
  const { data, loading, error, refetch } = useGet("/books");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <div className="text-center text-2xl md:text-4xl font-bold">
        latest book
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        {data.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
