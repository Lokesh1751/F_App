import "./App.css";
import React, { useState } from "react";
import Delivery from "./Components/Delivery";
import Recipe from "./Components/Recipe";
import MyAccount from "./Components/MyAccount";
import Reviews from "./Components/Reviews";
import Help from "./Components/Help";
import SignUp from "./Components/SignUp";
import Menu from "./Components/Menu";
import NonVeg from "./Components/NonVeg";
import Category from "./Components/Category";
import Breakfast from "./Components/Breakfast";
import Lunch from "./Components/Lunch";
import Snacks from "./Components/Snacks";
import Dinner from "./Components/Dinner";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 4500);
  return (
    <>
      {load ? (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-[#fffafc]">
          <img
            src="https://i.pinimg.com/originals/ee/1d/08/ee1d081c5bdf966b058c1a6588e73e8a.gif"
            alt="Loading..."
          />
          <h1 className="text-black text-5xl font-semibold">
            Bring<span className="text-orange-700">Meals</span>
          </h1>
        </div>
      ) : (
        <div>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <React.Fragment>
                    <Home />
                  </React.Fragment>
                }
              />

              <Route path="/rec/:id" element={<Recipe />} />

              <Route element={<MyAccount />} path="/signup" />

              <Route element={<Delivery />} path="Del" />

              <Route element={<Reviews />} path="Fav" />

              <Route element={<Help />} path="Hel" />

              <Route element={<SignUp />} path="sign" />

              <Route element={<Menu />} path="menu" />

              <Route element={<NonVeg />} path="nvg" />

              <Route element={<Category />} path="Cat" />

              <Route element={<Breakfast />} path="break" />

              <Route element={<Lunch />} path="lunch" />

              <Route element={<Snacks />} path="snacks" />

              <Route element={<Dinner />} path="dinner" />

              <Route element={<Cart />} path="Cart" />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
