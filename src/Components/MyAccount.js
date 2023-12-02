import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const MyAccount = () => {
  return (
    <div
      className=" bg-black/20 absolute w-full h-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/SVt8JKy/bg.jpg)`,
        backgroundSize: "Cover",
      }}
    >
         <Link to="/"><FaArrowLeft size={25} className='text-white absolute left-3 top-3'/></Link>
      <h2 className="text-4xl py-10 text-white">
        Bring<span className="font-bold text-orange-700">Meals</span>
      </h2>
      <div className="flex flex-col justify-center">
        <div className="w-[350px] bg-black/20 p-5 flex flex-col rounded-lg">
          <h1 className="text-white text-center text-xl cursor-pointer ">
            <Link to="/Acc">
              <span className="hover:text-orange-700">Sign In</span>
            </Link>{" "}
            |
            <Link to="/sign">
              {" "}
              <span className="hover:text-orange-700">Sign Up</span>
            </Link>
          </h1>

          <form action="" className="flex flex-col m-3">
            {/* <h1 className="text-white">Name:</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              className="p-1 rounded-lg"
            />{" "} */}
            <br />
            <h1 className="text-white">Email:</h1>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="p-1 rounded-lg"
            />{" "}
            <br />
            <h1 className="text-white">Password:</h1>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="p-1 rounded-lg"
            />{" "}
            <br />
            <div className="flex justify-center m-5">
          <submit className="bg-orange-700 w-[60%] text-white text-center rounded-lg cursor-pointer hover:bg-orange-600 p-3">
            Submit
          </submit>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function MyAccount() {
//   const history = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             history("/home", { state: { id: email } });
//           } else if (res.data == "notexist") {
//             alert("User not found");
//           }
//         })
//         .catch((e) => {
//           alert("wrong details");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div
//       className="Login flex flex-col justify-center items-center h-screen"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/SVt8JKy/bg.jpg)`,
//         backgroundSize: "Cover",
//       }}
//     >
//       <div className="container w-96 h-3/5 bg-black bg-opacity-50  rounded-md text-white flex flex-col justify-center items-center p-5">
//         <h1 className="text-4xl font-bold mb-9">Log In</h1>
//         <form
//           className="flex flex-col justify-center items-center"
//           action="POST"
//         >
//           <div className="form-control  mt-5 p-4 w-full">
//             <input
//               type="email"
//               className="w-full text-black p-1"
//               id="email"
//               name="email"
//               placeholder="Username"
//               required
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </div>
//           <div className="form-control mt-5 p-4 w-full">
//             <input
//               type="password"
//               className="w-full text-black p-1"
//               id="password"
//               name="password"
//               placeholder="Password"
//               required
//               onChange={(e) => {
//                 setPass(e.target.value);
//               }}
//             />
//           </div>
//           <button
//             type="submit"
//             onClick={submit}
//             className="btn w-3/4 m-7 p-2 bg-orange-700 w-[80%] text-white text-center rounded-lg cursor-pointer hover:bg-orange-600 p-3"
//           >
//             Submit
//           </button>
//           <p className="text mt-3">
//             Don't have an account?
//             <Link to="/signup" className="text-orange-600">
//               &nbsp;Create Account
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default MyAccount;
