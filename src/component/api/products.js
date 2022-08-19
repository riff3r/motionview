import React, { useState } from "react";
import useProducts from "../hooks/useProducts";

const products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const URL = "https://idbdev.com/motion2/public/api/product-is-here-caught-me";

  useEffect(() => {
    axios.get(URL).then((response) => setAllProducts(response.data));
  }, []);
  return <div></div>;
};

export default products;
