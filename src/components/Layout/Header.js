import React from "react";

import HeaderCardButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals order</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Food Table header" />
      </div>
    </React.Fragment>
  );
};

export default Header;
