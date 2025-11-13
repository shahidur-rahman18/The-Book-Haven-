import { PiFlagBanner } from "react-icons/pi";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import BookCard from "./BookCard";
import useGet from "../hooks/useGet";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";
import { PropagateLoader } from "react-spinners";
import TopCategories from "../components/TopCategory";
import FeaturedAuthors from "../components/FeaturedAuthor";
import Error from "../components/Error";
import { format } from "date-fns";

const Home = () => {
  const { data, loading, error } = useGet("/books");
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  /* const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }; */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#842A3B" size={20} speedMultiplier={1.3} />
      </div>
    );
  }
  if (error) return <Error></Error> ;

  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <motion.h1
        initial={{ y: 80, opacity: 10 }}
        animate={{ y: 2, opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="mt-5 text-center text-primary text-2xl md:text-4xl font-extrabold"
      >
        Latest Books
      </motion.h1>
       <motion.p 
        initial={{ x: 80, opacity: 10 }}
        animate={{ x: 2, opacity: 1 }}
        transition={{ duration: 3, delay: 0.9 }}

        className="text-center" >{format (new Date(),'EEEE , MMMM , YYY ')}</motion.p>
        
      <div
        className="max-w-7xl px-10 py-10 mx-auto gap-3 mt-5"
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            400: { slidesPerView: 1.2 }, // Small phones - partial next slide
            500: { slidesPerView: 1.5 }, // Medium phones
            640: { slidesPerView: 2 }, // Large phones
            768: { slidesPerView: 3 }, // Tablets
            1024: { slidesPerView: 4 }, // Laptops
            1280: { slidesPerView: 4 }, // Desktops
            1536: { slidesPerView: 4 }, // Large desktops
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data.map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <TopCategories></TopCategories>
      <FeaturedAuthors></FeaturedAuthors>
    </div>
  );
};

export default Home;
