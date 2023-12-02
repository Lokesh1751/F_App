import React from "react";
import { useParams } from "react-router-dom";
import { mealData } from "../data/data.js";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const selectedItem = mealData.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div>Recipe not found</div>;
  }

  return (
    <div
      className=" bg-black/20 absolute"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${selectedItem.image})`,
        backgroundSize: "Cover",
      }}
    >
      <Link to="/">
        <FaArrowLeft size={25} className="text-white relative left-3 top-3" />
      </Link>
      <h3 className="text-orange-700 font-bold text-3xl py-5 text-center underline">
        {selectedItem.name}
      </h3>
      <h3 className="text-orange-700 font-bold text-3xl py-5 mx-5 py-12 ">
        Ingredients Used:
      </h3>
      <p className="  xl:text-2xl mx-5 w-[90%] text-white sm:w-[10%] text-xl mx-5 text-white">
        {selectedItem.ingredients}
      </p>

      <br />
      <h3 className="text-orange-700 font-bold text-3xl py-5 mx-5  py-12">
        Recipe:
      </h3>
      <p className="text-lg mx-5 text-white w-[90%] xl:text-2xl mx-5 text-white w-[90%]">
        {selectedItem.recipe}
      </p>
      <h3 className="text-orange-700 font-bold text-3xl py-5 text-center py-12">
        Your Feedback
      </h3>
      <form action="" className="flex flex-col justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          className="px-4 py-3 rounded-lg mx-5 bg-black/30"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Your Ideas Here"
          className="my-4 mx-5 py-3 px-4 rounded-lg bg-black/30"
        ></textarea>
        <button className="bg-orange-700 w-[100px] rounded-lg text-white cursor-pointer mx-5 my-3 p-2">
          Submit
        </button>
      </form>
    </div>
    // <img
    //   src={selectedItem.image}
    //   className="sm: w-[1000vw] h-[950px] overflow-y-hidden opacity-20 xl: w-[100vw] h-[100vh] overflow-y-hidden opacity-20"
    //   alt=""
    // />
  );
};

export default Recipe;
