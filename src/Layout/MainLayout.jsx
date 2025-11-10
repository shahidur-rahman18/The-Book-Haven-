import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();

  // Define which routes should have full-width sections
  const fullWidthRoutes = ["/"]; // home route

  const isFullWidth = fullWidthRoutes.includes(location.pathname);
  return (
    <div
      className="
        w-full 
        bg-gradient-to-r 
        from-[#f7e9ec] to-[#f2e9ff] 
        
       
      "
    >
      {/* Navbar stays inside container */}
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      {/* Outlet - conditional container */}
      {isFullWidth ? (
        <Outlet /> // Full-width (Banner will stretch edge to edge)
      ) : (
        <div className="max-w-7xl mx-auto mt-4 ">
          <Outlet />
        </div>
      )}

      {/* Full-width Footer */}
      <Footer />

      <Toaster />
    </div>
  );
};

export default MainLayout;
