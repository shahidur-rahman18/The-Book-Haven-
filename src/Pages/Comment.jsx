import React from 'react';
import { AuthContext } from '../context/AuthContext';

const Comment = ({comments}) => {
    const {comment,userName,userEmail,userPhoto}= comments
    return (
         <div className="p-2 ">
        <div className="max-w-2xl  mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Orange Header Bar */}
            <div className="bg-gradient-to-r from-amber-950 to-orange-500 h-2"></div>

            {/* Main Content */}
            <div className="p-6 md:p-8 lg:p-10">
              {/* Review Text */}
              <div className="mb-8">
                <p className="text-gray-700 text-xs md:text-sm lg:text-lg leading-relaxed font-medium">{comment}
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Profile Section with Triangle */}
                <div className="relative">
                  <div
                    className="absolute -left-1 -top-1 w-0 h-0 
                    border-l-[60px] border-l-cyan-500 
                    border-b-[60px] border-b-transparent 
                    -z-10 hidden sm:block"
                  ></div>

                  <div className="relative z-10 bg-white  rounded-full shadow-md">
                    <div className="w-20 h-20  rounded-full overflow-hidden  border-white ">
                        <img className=" w-full h-full flex items-center justify-center" src={userPhoto} alt="" />
                    
                    </div>
                  </div>
                </div>

                {/* Name, Title, and Amazon Logo */}
                <div className="flex-1">
                  <h3 className="text-sm md:text-xl text-primary font-extrabold ">
                    {userName}
                  </h3>
                  <p className="text-secondary  text-xs md:text-base mt-1">
                    {userEmail}
                  </p>
                </div>
              </div>

            
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Comment;