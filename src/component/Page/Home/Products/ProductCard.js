import React from "react";
import { useCart } from "react-use-cart";

const ProductCard = ({
  id,
  name,
  image,
  regular_price,
  sale_price: price,
  stock,
}) => {
  const { addItem } = useCart();
  const imageUrl = `https://idbdev.com/motion2/public/images/${image}`;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={imageUrl} alt={name} />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">{name}</h5>
          <div>
            <span className="text-sm text-gray-400 font-semibold line-through mr-3">
              ৳{regular_price}
            </span>
            <span className="text-orange-500 text-xl font-semibold">
              ৳{price}
            </span>
          </div>
        </div>

        <button
          disabled={stock < 1}
          onClick={() =>
            addItem({
              id,
              name,
              image,
              price,
              stock,
            })
          }
          className="items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:bg-orange-700
          disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
