import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/fzqK0QLz/slider-thumb5-7e06467d-f048-4715-afd8-49df26eef79a.png",

      title: "Yoga Lesson",
      desc: "Yoga Lesson” is a short, practical guide that introduces the core principles of yoga. It covers basic postures, breathing techniques, and mindfulness practices designed to improve flexibility, balance, and inner peace. Perfect for beginners, the book helps readers build a daily routine that strengthens the body while calming the mind.",
    },
    {
      img: "https://i.ibb.co.com/zVbLjht0/slider-thumba4-79e7c372-882c-4202-aacc-e22697196e37.png",
      title: "War Of Dream",
      desc: "“War of Dream” is an engaging and dramatic novel that explores the clash between ambition and reality. It dives into characters’ struggles to achieve their dreams amidst obstacles and conflicts, highlighting themes of perseverance, sacrifice, and the cost of chasing one’s passions. The story combines intense emotional moments with action, making it a compelling read about fighting for what truly matters.",
    },
    {
      img: "https://i.ibb.co.com/9mVmx2kw/book-cover0-3fc9a3e2-8b9c-42a2-bb51-942c624395b1-large.jpg",
      title: "What Is Life",
      desc: "“What Is Life” is a thought-provoking book that explores the fundamental questions about existence, biology, and the nature of living beings. It delves into scientific concepts as well as philosophical ideas to help readers understand what defines life, how it began, and what it means to be alive. This book is great for anyone curious about life’s mysteries from both a scientific and reflective perspective.",
    },
  ];
  return (
    <>
     <div className="w-full py-10 md:py-12">
      <Swiper spaceBetween={0} slidesPerView={1} loop={true} >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-12 px-6 md:px-16 lg:px-24 h-auto md:h-[500px]"
              
            >
              {/* Left: Image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-xl w-full md:w-[50%] h-auto max-h-[400px] object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1 flex flex-col justify-center items-start space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {slide.desc}
                </p>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Banner;
