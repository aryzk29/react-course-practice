import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderButtonDisable = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddCartItemHandler.bind(null, item)}
          onRemove={onRemoveCartItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.total.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {orderButtonDisable && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
