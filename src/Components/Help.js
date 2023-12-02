import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Menu = () => {
  return (
    <div
      className=" bg-black/20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.ibb.co/xHrBwmy/veg-burger.jpg)`,
        backgroundSize: "Cover",
      }}
    >
      <Link to="/">
        <FaArrowLeft size={25} className="text-white absolute left-3 top-3" />
      </Link>
      <div className="pt-6">
        <div className="bg-black/20  w-[100%] rounded-xl ">
          <h1 className="text-white text-3xl mr-0 text-center font-bold   xl:text-4xl xl:mr-16 ">
            Get In Touch
          </h1>
          <div className="flex justify-center space-x-6 pt-5  md:space-x-[200px] xl:space-x-[300px] flex-wrap">
            <div className="m-4">
              <FaAddressCard
                size={50}
                className="text-white rounded-full text-center"
              />
              <h1 className="text-white text-xl font-bold xl:text-2xl">
                Address
              </h1>
              <div>
                <div>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    In Chandigarh:
                  </p>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    Sector 32 <p>PinCode-160030</p>
                  </p>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    Chandigarh,Punjab
                  </p>
                </div>
              </div>
            </div>
            <div className="m-4">
              <FaPhone
                size={50}
                className="text-white rounded-full text-center"
              />
              <h1 className="text-white text-xl font-bold xl:text-2xl">
                Phone
              </h1>
              <div>
                <div>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    Whatsapp Numbers:
                  </p>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    7788662314
                  </p>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    9876289034
                  </p>
                  <p className="text-sm text-white font-bold xl:text-lg">
                    7566234567
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block xl:block">
              <FaEnvelope
                size={50}
                className="text-white rounded-full text-center"
              />
              <h1 className="text-white text-xl font-bold  xl:text-2xl">
                Email
              </h1>
              <p className="text-sm text-white font-bold xl:text-lg">
                bgm@gmail.com
              </p>
              <p className="text-sm text-white font-bold xl:text-lg">
                foodget@gmail.com
              </p>
              <p className="text-sm text-white font-bold xl:text-lg">
                ritikgr@gmail.com
              </p>
              <p className="text-sm text-white font-bold xl:text-lg">
                lokeshangi@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-white font-bold text-center text-2xl p-2 mr-20 xl:text-4xl">
        Message Us
      </h1>
      <div className="flex justify-center ">
        <form action="" className="bg-black/20 w-[90%] rounded- m-6">
          <h1 className="text-white p-2">Name:</h1>
          <input
            type="text"
            className="bg-black/40 m-2 p-1 rounded-lg w-[50%] text-white"
          />
          <h1 className="text-white p-2">Email:</h1>
          <input
            type="text"
            className="bg-black/40 m-2 p-1 rounded-lg w-[50%] text-white"
          />
          <h1 className="text-white p-2">Your Message:</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-black/40 rounded-lg m-2 p-1 w-[90%] text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-700 block p-2 m-2 text-white font-bold rounded-lg hover:bg-orange-600 duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
