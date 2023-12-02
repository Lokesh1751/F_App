import React from "react";
import { Review } from "../data/data";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.ibb.co/QML2CWm/veg-burger.jpg)`,
        backgroundSize: "Cover",
      }}
    >
      <Link to="/">
        <FaArrowLeft size={25} className="text-white relative left-3 top-3" />
      </Link>
      <h2 className="text-4xl py-10 text-center text-white">
        People's <span></span>
        <span className="font-bold text-orange-700">Feedbacks</span>
      </h2>
      <div className="flex flex-wrap">
        {Review.map((item) => {
          return (
            <div className="flex flex-col flex-wrap   w-[90%]   bg-black/40 text-white rounded-lg ml-5 mt-3 p-5 cursor-pointer xl:w-[40%] xl:ml-28 xl:h-full mb-3 hover:translate-y-[-10px] duration-300">
              <img
                src={item.userpic}
                className="w-[100px] h-[100px] rounded-full border border-1 border-black/20"
                alt=""
              />
              <p className="text-2xl font-bold">{item.username}</p>
              <p className="text-xl">{item.dishname}</p>
              <p className="text-lg">{item.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
