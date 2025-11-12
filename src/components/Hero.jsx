import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#f7e9ec] to-[#f2e9ff] py-16">
      <div className="hero max-w-6xl mx-auto px-6">
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <img
            src="https://i.ibb.co.com/VcQBP6CL/Aesthetic-Book-Images.jpg"
            className="w-full md:h-[50vh] max-w-md rounded-2xl shadow-xl object-cover"
            alt="banner"
          />

          {/* Text Section */}
          <div className="space-y-6">
            <h1 className=" text-xl md:text-xl lg:text-3xl font-extrabold leading-tight text-gray-800">
              The Book
              <span className="text-primary">Haven</span>
            </h1>

            <p className="text-gray-600 text-sm max-w-md">
              Explore a collection of timeless classics, modern novels, and
              inspirational stories. Your reading journey begins here.
            </p>

            <div className="flex gap-4">
              <Link
                to="/all-books"
                className="btn btn-primary rounded-full  px-6  "
              >
                All Books
              </Link>
              <Link
                to="/add-book"
                className="btn outline  hover:btn-primary  rounded-full px-6"
              >
                Create Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
