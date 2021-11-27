import { Fragment } from "react";
import HeaderBasketButton from "./HeaderBasketButton";
import mealImg from "../../assets/mealsImg.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactEats</h1>
        <HeaderBasketButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Photo of food menu" />
      </div>
    </Fragment>
  );
};

export default Header;
