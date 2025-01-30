import styles from "./Display.module.css";
const Display = () => {
  return (
    <input className={styles.display} type="text" required autocomplete="off" />
  );
};
export default Display;
