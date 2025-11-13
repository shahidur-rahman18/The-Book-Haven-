import React from "react";
import Lottie from "lottie-react";
import studentAnimation from "../assets/studentAnimation.json";

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={studentAnimation}
        loop={true}
        className="w-[300px] h-[300px]"
        style={{ color:"" }}
      />
    </div>
  );
};

export default LottieAnimation;
