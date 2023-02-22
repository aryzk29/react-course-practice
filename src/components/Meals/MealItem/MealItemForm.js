import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 10
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(amountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Enter valid amount (1-10)</p>}
    </form>
  );
};

export default MealItemForm;
