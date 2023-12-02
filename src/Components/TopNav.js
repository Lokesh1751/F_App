import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineFavorite, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import Assets from "../Assets/icon.jpg";

const TopNav = () => {
  const [sidenav, setsidenav] = useState(false);
  console.log(sidenav);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          onClick={() => {
            setsidenav(!sidenav);
          }}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={28} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3">
          Bring<span className="font-bold text-orange-700">Meals</span>
        </h1>
        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold cursor-pointer">
            Free
          </p>
          <p className="p-2 text-bold cursor-pointer">Delivery</p>
        </div> */}
        <img src={Assets} alt="" className="w-2 cursor-pointer xl:w-20 " />
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full outline-none "
          type="text"
          placeholder="Search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 px-[25px] rounded-full w-[100px]">
        <BsFillCartFill size={20} /> <Link to="/Cart"> Cart</Link>
      </button>
      {sidenav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => {
            setsidenav(!sidenav);
          }}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sidenav
            ? "fixed top-[0px] left-[0px] w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-[-1000px] left-[-1000px] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setsidenav(!sidenav);
          }}
          className="absolute right-4 top-4 cursor-pointer"
          size={25}
        />
        <h2 className="text-2xl sm:text-2xl lg:text-2xl px-2 mt-3 ">
          Bring<span className="font-bold text-orange-700">Meals</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex cursor-pointer">
              <BsPerson
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              <span className="font-semibold">
                <Link to="/signup">SignIn/SignUp</Link>
              </span>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdMenu
                size={25}
                className="mr-4 text-white  bg-black rounded-full "
              />
              <span className="font-semibold">
                <Link to="/Del">
                  <Link to="/menu">Menu</Link>
                </Link>
              </span>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              <span className="font-semibold">
                <Link to="/Fav">FeedBack's</Link>
              </span>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              <span className="font-semibold">
                <Link to="/Cat">Categories</Link>
              </span>
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              <span className="font-semibold">
                <Link to="/Hel">Help</Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
