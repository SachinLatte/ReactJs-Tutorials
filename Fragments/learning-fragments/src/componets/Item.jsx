import styles from "./Item.module.css";
  const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li key={bought} className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button className={`${styles.button} btn btn-warning`} onClick={handleBuyButton}>Buy</button>
    </li>
  );
};

export default Item;
