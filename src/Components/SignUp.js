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
      <div className="w-[350px] bg-black/20 p-5 flex flex-col rounded-lg">
        <h1 className="text-white text-xl cursor-pointer text-center py-4 ">
          <Link to="/signup">
            <span className="hover:text-orange-700">Sign In</span>
          </Link>{" "}
          | <span className="hover:text-orange-700">Sign Up</span>
        </h1>

        <form action="" className="flex flex-col p-5">
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
            placeholder="New Password"
            className="p-1 rounded-lg"
          />{" "}
          <br />
          {/* <h1 className="text-white" placeholder="Repeat Password">
            Repeat Password:
          </h1> */}
          {/* <input
            type="password"
            name=""
            id=""
            placeholder="Repeat Password`"
            className="p-1 rounded-lg"
          />{" "} */}
          <br />
          <div className="flex justify-center m-5">
          <submit className="bg-orange-700 w-[80%] text-white text-center rounded-lg cursor-pointer hover:bg-orange-600 p-3">
            Create Your Account
          </submit>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function SignUp() {
//   const history = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function submit(e) {
//     e.preventDefault();
//     try {
//       await axios
//         .post("http://localhost:8000/signup", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             alert("User already exists");
//           } else if (res.data == "notexist") {
//             history("/", { state: { id: email } });
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
//       className="login"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/SVt8JKy/bg.jpg)`,
//         backgroundSize: "Cover",
//       }}
//     >
//       <div className="Login flex flex-col justify-center items-center h-screen">
//         <div className="container w-96 h-3/5 bg-black bg-opacity-50  rounded-md text-white flex flex-col justify-center items-center p-5">
//           <h1 className="text-4xl font-bold mb-9">SignUp</h1>
//           <form
//             className="flex flex-col justify-center items-center"
//             action="POST"
//           >
//             <div className="form-control  mt-5 w-full">
//               <input
//                 className="w-full text-black p-1"
//                 type="email"
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 placeholder="Email"
//               />
//             </div>
//             <div className="form-control mt-14 w-full">
//               <input
//                 className="w-full text-black p-1"
//                 type="password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//                 placeholder="Password"
//               />
//             </div>
//             <div className="btn w-3/4 m-10 p-2 bg-orange-700 w-[80%] text-white text-center rounded-lg cursor-pointer hover:bg-orange-600 p-3 ">
//               <center>
//                 <input type="submit" onClick={submit} />
//               </center>
//             </div>
//             <p className="text mt-3">
//               Already have an account?
//               <Link to="/" className="text-orange-600">
//                 &nbsp;LogIn
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
