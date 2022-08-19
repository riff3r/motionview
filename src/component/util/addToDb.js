const addToDb = (order) => {
  let orders = [];

  //   Get shopping Cart
  const storedOrder = localStorage.getItem("ecomOrders");

  if (storedOrder) {
    orders = JSON.parse(storedOrder);
  }

  //   Add Order
  orders.push(order);

  console.log(orders);

  const jsonArr = JSON.stringify(orders);

  console.log(jsonArr);

  localStorage.setItem("ecomOrders", jsonArr);
};

const getFromDB = () => {
  let orders = [];

  //   Get shopping Cart
  const storedOrder = localStorage.getItem("ecomOrders");

  if (storedOrder) {
    orders = JSON.parse(storedOrder);
  }

  return orders;
};

const removeFromDB = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDb, removeFromDB, getFromDB };
