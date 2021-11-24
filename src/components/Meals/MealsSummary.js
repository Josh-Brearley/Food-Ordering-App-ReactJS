import classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2> Great food, straight to your door.</h2>
      <p>
        Choose your meal from a wide selection of delicious, fresh ingredients.
      </p>
      <p>
        Each meal is carefully put together to support many diet plans, with the
        ability to add or subract anything on your order.
      </p>
    </section>
  );
};

export default MealsSummary;
