import { current } from "daisyui/src/colors";
import React from "react";
import Cart from "../../Layout/Cart";
import { getFromDB } from "../../util/addToDb";
import HomeSlider from "./HomeSlider";
import Products from "./Products/Products";

const Home = () => {
  // console.log(orders);

  return (
    <main className="container mx-auto">
      <HomeSlider />
      <Products />
    </main>
  );
};

export default Home;
