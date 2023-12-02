import React, { useState } from "react";
import { mealData } from "../data/data";
import { pizza } from "../data/data";
import { salad } from "../data/data";
import { chicken } from "../data/data";
import { Link } from "react-router-dom";
const Meal = () => {
  const [food, setfood] = useState(mealData);

  return (
    <>
      <h3 className="text-orange-700 font-bold text-3xl py-5 text-center py-12">
        Our Meal
      </h3>
      <div className="flex  justify-center space-x-4">
        <button
          className="bg-orange-700 text-white rounded-lg px-4 py-1 hover:bg-white hover:text-orange-700 hover:border hover:border-[1px] hover:border-orange-700 font-bold  duration-200"
          onClick={() => {
            setfood(mealData);
          }}
        >
          All
        </button>
        <button
          className="bg-orange-700 text-white rounded-lg px-4 py-1 hover:bg-white hover:text-orange-700 hover:border hover:border-[1px] hover:border-orange-700 font-bold duration-200"
          onClick={() => {
            setfood(pizza);
          }}
        >
          Pizza
        </button>
        <button
          className="bg-orange-700 text-white rounded-lg px-4 py-1 hover:bg-white hover:text-orange-700 hover:border hover:border-[1px] hover:border-orange-700 font-bold duration-200"
          onClick={() => {
            setfood(chicken);
          }}
        >
          Chicken
        </button>
        <button
          className="bg-orange-700 text-white rounded-lg px-4 py-1 hover:bg-white hover:text-orange-700 hover:border hover:border-[1px] hover:border-orange-700 font-bold duration-200"
          onClick={() => {
            setfood(salad);
          }}
        >
          Salad
        </button>
      </div>
      <div className="max-w-[1520px] m-auto px-4 flex flex-wrap">
        <div className="flex flex-wrap">
          {food.map((item) => {
            return (
              <div className="w-[100%] m-7 rounded-lg relative xl:w-[300px] h-[200px]">
                <div className="absolute w-full h-full bg-black/20 rounded-lg text-white cursor-pointer hover:bg-black/50 hover:transition duration-200">
                  <button className="absolute text-white font-bold px-2 py-2 mx-2  bg-orange-700 rounded-md">
                    {item.name}
                  </button>
                  <button className="absolute text-white font-bold px-2 py-2 bottom-[-1px] right-[-5px] bg-orange-700 rounded-full">
                    {item.price}
                  </button>
                  <button className="absolute text-white font-bold px-2 py-2 bottom-[-1px] left-[-5px] bg-orange-700 rounded-full">
                    <Link
                      to={`/rec/${item.id}`}
                    >
                      View Recipe{" "}
                    </Link>
                  </button>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="w-[100%]  rounded-lg cursor-pointer xl:w-[300px] h-[200px]"
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

export default Meal;
