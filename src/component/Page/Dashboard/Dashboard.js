import React from "react";
import { getFromDB } from "../../util/addToDb";
import Orders from "./Orders";

const Dashboard = () => {
  const orders = getFromDB();

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>Order #</label>
              </th>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <Orders key={i} order={order} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
