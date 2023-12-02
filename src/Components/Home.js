import React from "react";
import TopNav from "./TopNav";
import Toppicks from "./Toppicks";
import Meal from "./Meal";
import Footer from "./Footer";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Featured from "./Featured";
import Delivery from "./Delivery";
import SpecialdayOffers from "./SpecialdayOffers";

function Home() {
  return (
    <div>
      <TopNav />
      <Featured />
      <Delivery />
      <Toppicks />
      <Meal />
      <SpecialdayOffers />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
