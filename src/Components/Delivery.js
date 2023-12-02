import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-700 font-bold text-3xl text-center">
        Quick Delivery
      </h3>
      <div className="mx-auto flex flex-col xl:flex-row">
        <img
          className=" mx-auto my-4  xl:w-[600px]"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center xl:w-1/2">
          <p className="text-orange-700 font-md font-bold text-2xl">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convinience on-demand
          </h1>
          <p className="text-sm font-semibold">
            BringMeals Restaurant Delivery makes it easy to satisfy your food
            cravings without the hassle of cooking or dining out. Whether you're
            planning a cozy night in, a quick lunch at the office, or a special
            meal with friends and family, BringMeals brings the restaurant
            experience directly to you. It's a convenient way to enjoy a wide
            variety of cuisines, all with the tap of a button. BringMeals isn't
            just about delivering food; it's about delivering an exceptional
            dining experience. From quick weekday lunches to special weekend
            treats, this app has become an indispensable tool for foodies and
            busy individuals alike. Whether you're at home, in the office, or on
            the go, BringMeals ensures that delicious meals are always just a
            few taps away. Say goodbye to cooking stress and hello to a world of
            culinary delights with BringMeals!
          </p>
          {/* <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
          <h1 className="text-3xl font-bold mt-3 xl:text-4xl">Bring <span className="text-orange-700">Meals</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
