import React from "react";
import { FaStar } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md duration-300">
      {/* Book Cover */}
      <div className="w-full h-60 bg-gray-100 rounded-xl overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={book.coverImage}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category */}
      <p className="mt-3 text-sm text-gray-500 font-medium">{book.genre}</p>

      {/* Title */}
      <h2 className="mt-1 font-bold text-lg text-gray-800 leading-tight">
        {book.title}
      </h2>

      {/* Price */}
      <div className="flex items-center gap-3 mt-2">
        <span className="text-primary font-bold text-xl">${book.price}</span>
      </div>

      {/* Author + Rating */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          {/* Small round avatars (optional) */}
          {/*  <img
            src={book.coverImage}
            className="w-7 h-7 rounded-full"
            alt=""
          /> */}
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">{book.author}</span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-2 text-yellow-500">
          {[...Array(book.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
          {book.rating}
        </div>
      </div>

      {/* Add to Cart Button */}
      <motion.button
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="btn-primary w-full mt-4 cursor-pointer hover:bg-[#c4dde7] text-gray-800 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 duration-200"
      >
        Viw Details
      </motion.button>
    </div>
  );
};

export default BookCard;
