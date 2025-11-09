import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: "https://i.ibb.co.com/fzqK0QLz/slider-thumb5-7e06467d-f048-4715-afd8-49df26eef79a.png",
      title: "Yoga Lesson",
      desc: "Yoga Lesson is a short, practical guide that introduces the core principles of yoga...",
    },
    {
      img: "https://i.ibb.co.com/zVbLjht0/slider-thumba4-79e7c372-882c-4202-aacc-e22697196e37.png",
      title: "War Of Dream",
      desc: "War of Dream is an engaging and dramatic novel that explores the clash between ambition and reality...",
    },
    {
      img: "https://i.ibb.co.com/9mVmx2kw/book-cover0-3fc9a3e2-8b9c-42a2-bb51-942c624395b1-large.jpg",
      title: "What Is Life",
      desc: "What Is Life is a thought-provoking book that explores the fundamental questions about existence...",
    },
  ];

  return (
    <div className="relative bg-base-200 w-full py-10 md:py-12">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-12 px-6 md:px-16 lg:px-24 h-auto md:h-[500px]">
              {/* Left: Image */}
              <motion.div
                key={`${index}-img-${activeIndex}`} // 👈 Forces re-render for motion
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-xl w-full md:w-[50%] p-4 h-auto max-h-[400px] object-cover"
                />
              </motion.div>

              {/* Right: Text */}
              <motion.div
                key={`${index}-text-${activeIndex}`} // 👈 Forces re-render for motion
                className="flex-1 flex flex-col justify-center items-start space-y-4 mb-5"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl lg:text-4xl font-bold text-[#A3485A]">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-xs md:text-sm  leading-relaxed">
                  {slide.desc}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     



    </div>
  );
};

export default Banner;