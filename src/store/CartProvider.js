import React from "react";
import CartContext from "./cart-context";

const addItemHandler = (item) => {};

const removeItemHandler = (id) => {};

const valueProvider = {
  items: [],
  total: 0,
  addItem: addItemHandler,
  removeItem: removeItemHandler,
};

const CartProvider = (props) => {
  return (
    <CartContext.Provider value={valueProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
