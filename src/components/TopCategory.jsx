import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "01",
    img: "https://i.ibb.co.com/9mVmx2kw/book-cover0-3fc9a3e2-8b9c-42a2-bb51-942c624395b1-large.jpg",
    title: "Philosophy (5)",
  },
  {
    id: "02",
    img: "https://i.ibb.co.com/zVbLjht0/slider-thumba4-79e7c372-882c-4202-aacc-e22697196e37.png",
    title: "Fantasy (5)",
  },
  {
    id: "03",
    img: "https://i.ibb.co.com/fzqK0QLz/slider-thumb5-7e06467d-f048-4715-afd8-49df26eef79a.png",
    title: "Health (9)",
  },
  {
    id: "04",
    title: "Science Fiction (6)",
    img: "https://i.ibb.co.com/cK9hR4Ss/book-cover-03-psd-2f236933-e667-478a-92ad-a2ca09e71876-large.jpg",
  },
  {
    id: "05",
    title: "Adventure Book (4)",
    img: "https://i.ibb.co.com/0VKVPLBx/book-cover-04-psd-1b0e33a1-95f3-44ce-8693-93378347b845-large.jpg",
  },
];

export default function TopCategories() {
  return (
    <div className="w-full py-10 bg-white flex flex-col items-center">
      <h1 className="text-3xl text-primary md:text-4xl font-bold text-center mb-10 flex items-center gap-3">
        Top Categories Book
      </h1>

      <div className="relative w-[95%] max-w-[1400px]  border-[#6e4c0c] rounded-3xl px-5 md:px-10 py-12">
        {/* Left Button */}
        {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0c4a6e] text-white p-3 rounded-full shadow-lg hover:scale-110 transition">
          <ChevronLeft size={22} />
        </button> */}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="relative w-48 h-48 flex items-center justify-center rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-[4px] border-dotted border-[#5c231b]"></div>
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-24 h-32 object-cover rounded shadow-md z-10"
                />
                {/*     <span className="absolute -top-3 -right-1 bg-[#0c4a6e] text-white text-sm font-bold p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  
                </span> */}
              </motion.div>
              <p className="text-lg font-semibold mt-4 text-[#b83416]">
                {cat.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        {/*  <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0c4a6e] text-white p-3 rounded-full shadow-lg hover:scale-110 transition">
          <ChevronRight size={22} />
        </button> */}
      </div>
    </div>
  );
}
