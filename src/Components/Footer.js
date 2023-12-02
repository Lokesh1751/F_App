import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#24262b] flex flex-wrap space-x-3 justify-center xl:space-x-28 md-4 pb-4">
      <h1 className="text-orange-700 bg-[#24262b] text-3xl  font-bold px-10">
        <span className="text-white">Bring</span>Meals
      </h1>
      <p className="text-gray-400 text-md font-bold pl-1 xl:text-lg m-2 xl:pr-4">
        Copyright © 2019 BringMeals. Delivering Moments!
      </p>
      <div className="flex space-x-4 py-1 xl:py-0">
        <div>
          <FaFacebookSquare
            size={30}
            className=" text-white cursor-pointer hover:text-orange-700 hover:bg-white duration-300 hover:translate-y-[-5px]"
          />
        </div>
        <div>
          <FaInstagram
            size={30}
            className=" text-white cursor-pointer hover:text-orange-700 hover:bg-white duration-300 hover:translate-y-[-5px]"
          />
        </div>
        <div>
          <FaTwitterSquare
            size={30}
            className=" text-white cursor-pointer hover:text-orange-700 hover:bg-white duration-300 hover:translate-y-[-5px]"
          />
        </div>
        <div>
          <FaLinkedin
            size={30}
            className=" text-white cursor-pointer hover:text-orange-700 hover:bg-white duration-300 hover:translate-y-[-5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
