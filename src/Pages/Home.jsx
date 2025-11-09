import React from "react";
import { PiFlagBanner } from "react-icons/pi";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <div className="text-center text-2xl md:text-4xl font-bold">
        latest book
      
  
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        {/* {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))} */}
        
      </div>
    </div>
  );
};

export default Home;
