import axios from "axios";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const URL = "https://idbdev.com/motion2/public/api/product-is-here-caught-me";

  useEffect(() => {
    axios.get(URL).then((response) => setAllProducts(response.data.data));
  }, []);

  return [allProducts];
};

export default useProducts;
