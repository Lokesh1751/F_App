import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <>
      <h3 className="text-orange-700 font-bold text-3xl py-5 text-center py-12">
        Top Categories{" "}
      </h3>
      <div className="max-w-[1520px]  px-4 flex flex-wrap justify-center">
        <div className="flex flex-wrap ml-10 space-x-1 xl:space-x-20">
          {categories.map((item) => {
            return (
              <div className="w-[45%]    rounded-lg relative xl:w-[100px] h-[60px] py-10 ">
                <img
                  src={item.image}
                  alt=""
                  className="w-[90%]  rounded-lg cursor-pointer xl:w-[100px] h-[60px]"
                />
              </div>
            );
          })}
        </div>
      </div>
      <br /> 
      <br />
    </>
  );
};

export default Categories;
