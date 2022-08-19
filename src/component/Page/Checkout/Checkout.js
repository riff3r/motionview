import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { addToDb } from "../../util/addToDb";

const Checkout = () => {
  const { items, cartTotal, emptyCart } = useCart();

  console.log(items);
  return (
    <section className="container mx-auto mt-40">
      <div className="flex flex-row gap-5">
        <div className="lg:basis-3/4">
          {" "}
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Cart Details
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={`https://idbdev.com/motion2/public/images/${item.image}`}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.name}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      ৳{item.price}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:basis-1/4">
          <div className="max-w-full">
            <div className="bg-white p-5 items-center rounded-lg shadow-md border">
              <h5 className="text-center text-lg font-semibold text-[#6B6B6B] p-4">
                Checkout Summary
              </h5>
              <hr className="my-3" />
              <span className="">Payment: Cash on Delivery</span>
              <div className="flex justify-between mt-3">
                <h6 className="font-bold">Total</h6>
                <div className="font-bold">{cartTotal}</div>
              </div>
              <div className="mt-4">
                <Link
                  to="/"
                  className="bg-primary w-full mx-auto text-white rounded-md font-bold text-lg py-2 shadow hover:shadow-md inline-block text-center"
                  onClick={() => {
                    addToDb(items);
                    emptyCart();
                    toast.success("Order Confirmed");
                  }}
                >
                  Confirm Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
