import React from "react";
import Lottie from "lottie-react";
import errorMessage from "../assets/error.json";

const Error = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={errorMessage}
        loop={true}
        className="w-[300px] h-[300px]"
      />
    </div>
  );
};

export default Error;
