import React from "react";
import { specialOffersArray } from "../data/data";
const SpecialdayOffers = () => {
  return (
    <div>
      <h1 className="text-orange-700 font-bold text-3xl text-center py-2">
        Special Platters
      </h1>
      <div className="max-w-[1520px] m-auto px-4 flex flex-wrap">
        <div className="flex flex-wrap">
          {specialOffersArray.map((item) => {
            return (
              <div className="w-[100%] m-7 rounded-lg relative xl:w-[300px] h-[200px]">
                <div className="absolute w-full h-full bg-black/20 rounded-lg text-white cursor-pointer bg-black/60 hover:bg-black/0 hover:transition duration-200 ">
                  <button className="absolute text-white font-bold px-2 py-2 mx-2  bg-orange-700 rounded-md">
                    {item.offerName}
                  </button>
                  <button className="absolute text-white font-bold px-2 py-2 bottom-[-1px] right-[-5px] bg-orange-700 rounded-full">
                    ${item.price}
                  </button>
                  <p className="text-lg font-semibold absolute  left-2 bottom-10">
                    {item.description} {item.comboItems}
                  </p>
                </div>
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-[100%]  rounded-lg cursor-pointer xl:w-[300px] h-[200px] "
                />
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SpecialdayOffers;
