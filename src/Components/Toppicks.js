import React from "react";
import { topPicks } from "../data/data";
import "@splidejs/react-splide/css";

const Toppicks = () => {

  return (
    <>
      <h1 className="text-orange-700 font-bold text-3xl text-center py-2">
        Top Picks
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full">
        {topPicks.map((item) => {
          return (
            <div className="rounded-3xl relative m-4">
              <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white cursor-pointer">
                <p className="px-2 pt-4 font-bold text-2xl ">{item.title}</p>
                <p className="px-2">{item.price}</p>
                <button className="border-2 px-2 py-2 rounded-lg border-dotted border-white text-white mx-2 absolute bottom-4  transition duration-700 hover:bg-white hover:text-black font-bold">
                  Add To Cart
                </button>
              </div>
              <img
                className="w-[430px] h-[270px] object-cover rounded-3xl"
                src={item.img}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
};

export default Toppicks;
