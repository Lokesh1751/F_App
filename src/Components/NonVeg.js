import React from "react";
import { nonVegetarianFoodItems } from "../data/data";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Menu = () => {
  return (
    <div
      className=" bg-black/20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/rfN7MGb/bg1.webp)`,
        backgroundSize: "Cover",
      }}
    >
      <Link to="/">
        <FaArrowLeft size={25} className="text-white absolute left-3 top-3" />
      </Link>
      <h3 className="text-orange-700 font-bold text-3xl py-5 text-center py-12 xl:text-orange-700 font-bold xl:text-4xl py-5 text-center py-12">
        Our Non-Veg Menu
      </h3>
      <div className="flex justify-center text-lg text-white  xl:flex justify-center xl:text-2xl text-white m-4">
        <span className="px-10 cursor-pointer text-white hover:text-orange-700 hover:underline duration-300">
          <Link to="/menu">Vegetarian</Link>
        </span>{" "}
        |{" "}
        <span className="px-10 cursor-pointer text-white hover:text-orange-700 hover:underline duration-300">
          <Link to="/nvg" className="text-orange-700 underline">Non Vegetarian</Link>
        </span>
      </div>
      <div className="flex flex-wrap ml-10">
        {nonVegetarianFoodItems.map((item) => {
          return (
            <div className=" flex flex-wrap relative mt-6 xl:m-6">
              <button className="absolute   text-lg font-bold bg-orange-700 text-white rounded-lg p-2 z-10 ">
                {item.name}
              </button>
              <p className="absolute text-white z-10 bottom-0 p-2 font-bold">
                {item.description}
              </p>

              <img
                src={item.imageUrl}
                alt=""
                className="w-[300px] h-[300px]   rounded-xl hover:translate-y-[-10px] cursor-pointer transition-all duration-300 opacity-60"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
