import React from "react";
import { FaDownload, FaGear, FaUser } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { ImBoxAdd } from "react-icons/im";
import { IoLogoModelS } from "react-icons/io";
import { IoBookmarkSharp, IoBookSharp, IoLogOut } from "react-icons/io5";
import { LuRotate3D } from "react-icons/lu";
import { SiBookstack } from "react-icons/si";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl ">
      {/* dropdown + navTitle  */}
      <div className="navbar-start ">
        {/* this is for three line menu for small & medium devices  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill color='#A3485A' />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-books"}>
                <SiBookstack color='#A3485A' /> All Books
              </NavLink>
            </li>
          </ul>
        </div>

        {/* nav title */}

        <Link
          to={"/"}
          className="flex items-center gap-2 text-[11px]   md:text-lg  lg:text-2xl font-bold"
        >
          <IoBookSharp color="#842A3B" />
          Book Haven
        </Link>
      </div>

      {/* medium + lg device menu section  */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill color="#A3485A" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-books"}>
              <SiBookstack color="#A3485A" /> All Books
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-book"}>
              <ImBoxAdd color="#A3485A" /> Add Book
            </NavLink>
          </li>
          {/* 
          <li>
            <NavLink to={"/profile"}>
              <FaUser /> Profile
            </NavLink>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {/* {user ? ( */}
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 border-2 border-gray-300 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                referrerPolicy="no-referrer"
                src={
                  /*   user.photoURL || */
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <div className=" pb-3 border-b border-b-gray-200">
              <li className="text-sm font-bold">
                {/* {user.displayName}  */}Name{" "}
              </li>
              <li className="text-xs">{/* {user.email} */} email</li>
            </div>
            <li className="mt-3">
              <Link to={"/profile"}>
                <FaUser color="#A3485A" /> Profile
              </Link>
            </li>
            <li>
              <Link to={"/my-books"}>
                <IoBookSharp color="#A3485A" /> My Books
              </Link>
            </li>
            <li>
              <Link to={"/my-downloads"}>
                <FaDownload color="#A3485A" /> My Downloads
              </Link>
            </li>
            <input
              /* onChange={(e) => handleTheme(e.target.checked)} */
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />

            <li>
              <a>
                {" "}
                <FaGear color="#A3485A" /> Settings
              </a>
            </li>
            <li>
              <button
                //   onClick={signOutUser}
                className="btn btn-xs text-left bg-linear-to-r from-[#662222] to-[#A3485A] text-white"
              >
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* ) :  (
          <Link
            to={"/auth/login"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )}  */}
      </div>
    </div>
  );
};

export default Navbar;
