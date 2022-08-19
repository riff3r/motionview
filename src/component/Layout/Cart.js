import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  console.log(items);

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <div className="w-96 ml-auto">
        <div className="flex justify-between px-3 items-center border-b pb-8 mt-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <span className="text-lg font-bold text-orange-500">
            {totalUniqueItems} items
          </span>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center w-full py-5 h-full max-h-28"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center space-y-2 md:space-y-2 px-2">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>

                <input
                  className="mx-2 text-center w-8 h-6 border-2 rounded border-orange py-2"
                  type="text"
                  value={item.quantity}
                ></input>

                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
              </div>
              <div className="flex justify-around items-center lg:space-x-2">
                <img
                  className="w-20"
                  src={`https://idbdev.com/motion2/public/images/${item.image}`}
                  alt=""
                />

                <div className="flex flex-col justify-between items-start w-52">
                  <p className="text-xl font-medium">{item.name}</p>
                  <h3 className="text-lg text-orange-500 font-semibold">
                    ৳{item.price}{" "}
                    <span className="text-xs text-gray-400">
                      (৳{item.price} x {item.quantity})
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="px-2 flex items-center">
              <button
                className="hover:text-error text-xl"
                onClick={() => removeItem(item.id)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  color="#FF5722"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                  <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}

        <div className="border-t-2 border-dashed py-1 bg-white"></div>
        <div className="flex justify-evenly">
          <div>
            <h6>Total</h6>
          </div>
          <div className="font-bold">৳ {cartTotal}</div>
        </div>

        <div className="flex justify-center items-center mb-14 md:mb-6 mt-4">
          <Link to="checkout">
            <button
              className=" btn btn-primary px-28 text-white rounded-lg font-bold text-lg py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
