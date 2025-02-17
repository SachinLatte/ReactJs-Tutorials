import styles from "./Button.module.css";
const Button = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {buttonNames.map((elem) => (
        <button key={elem} className={styles.button} onClick={()=> onButtonClick(elem)}>{elem}</button>
      ))}
    </>
  );
};

export default Button;
