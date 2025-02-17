import Button from "./Button";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  return (
    <div className={styles.buttonContainer}>
      <Button onButtonClick={onButtonClick} />
    </div>
  );
};
export default ButtonContainer;
