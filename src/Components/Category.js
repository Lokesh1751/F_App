import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { foodItems } from "../data/data";
const Category = () => {
  return (
    <div
      className=" bg-black/20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images4.alphacoders.com/902/902926.jpg)`,
        backgroundSize: "Cover",
      }}
    >
      <Link to="/">
        <FaArrowLeft size={25} className="text-white absolute left-3 top-3" />
      </Link>
      <h3 className="text-orange-700 font-bold text-3xl  text-center py-5 xl:text-orange-700  xl:text-4xl ">
        Categories
      </h3>
      <div className="flex  space-x-3 xl:space-x-48 my-5">
        <div className="text-white text-lg font-bold cursor-pointer hover:text-orange-700 duration-300 xl:text-2xl ml-12 xl:ml-[290px]">
          <Link to="/break">BreakFast</Link>
        </div>

        <div className="text-white text-lg font-bold cursor-pointer hover:text-orange-700 duration-300 xl:text-2xl">
          <Link to="/lunch">Lunch</Link>
        </div>
        <div className="text-white text-lg font-bold cursor-pointer hover:text-orange-700 duration-300 xl:text-2xl">
          <Link to="/snacks">Snacks</Link>
        </div>
        <div className="text-white text-lg font-bold cursor-pointer hover:text-orange-700 duration-300 xl:text-2xl">
          <Link to="/dinner">Dinner</Link>
        </div>
      </div>
      {foodItems.map((item) => {
        return (
          <div className="flex justify-center w-full flex-wrap xl:flex-nowrap xl:space-x-10  xl:mt-24 xl:pb-1">
            <div>
              <img
                src={item.imageUrl}
                className="w-[400px] h-[300px] p-2  rounded-xl sm:flex-wrap cursor-pointer hover:translate-y-[-10px] duration-300"
                alt=""
              />
            </div>
            <div className="p-4">
              <div className="text-orange-700 text-xl font-semibold">
                {item.name}
              </div>
              <p className="text-md w-[100%]  mt-4 mb-4 md:text-lg xl:text-lg   font-semibold text-white xl:w-[600px]">
                {item.description}
              </p>
              <button className="bg-orange-700 text-white p-3 mb-3 rounded-lg font-bold cursor-pointer hover:bg-orange-600 duration-500">
                {item.category}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
