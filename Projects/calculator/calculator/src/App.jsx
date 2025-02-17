import Display from "./components/Display";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setcalVal("");
    }else if(buttonText === "="){
        const result = eval(calVal);
        setcalVal(result)
    }else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue)
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick = {onButtonClick} />
    </div>
  );
}

export default App;
