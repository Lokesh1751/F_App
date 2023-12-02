import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-[1520px]  text-white  bg-[#24262b] py-4 flex flex-col items-center justify-center">
      <div className="flex">
        <p className="font-bold px-4 text-center">
          Need Advice on How to improve your flow? Sign up to join our
          Newsletter and stay up to date.
        </p>
      </div>
      <div className="my-2">
        <div className="flex flex-col items-center justify-between">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 flex rounded-md text-black w-[100%]"
          />
          <button className="bg-orange-700 text-white rounded-md font-bold w-[300px] my-4 p-1 hover:bg-orange-600 duration-300">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
