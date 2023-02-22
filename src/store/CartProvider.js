import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  total: 0,
};

const reduceCart = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.total + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      total: updatedAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(reduceCart, defaultState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const valueProvider = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={valueProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
