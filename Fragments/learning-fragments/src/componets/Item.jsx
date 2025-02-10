import styles from "./Item.module.css";
const Item = ({ foodItems, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-primary`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
