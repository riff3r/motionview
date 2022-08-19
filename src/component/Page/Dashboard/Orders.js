import React from "react";

const Orders = ({ order, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>

      <td>
        {order.map((item, i) => (
          <p key={i + 1}>{item.name}</p>
        ))}
      </td>

      <td>
        {order.map((item, i) => (
          <p key={i + 2}>{item.price}</p>
        ))}
      </td>

      <td>
        {order.map((item, i) => (
          <p key={i + 3}>{item.quantity}</p>
        ))}
      </td>

      <td>
        <h3>
          {order.reduce((total, current) => total + current.itemTotal, 0)}
        </h3>
      </td>
    </tr>
  );
};

export default Orders;
