import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./componets/FoodItems";
import FoodHeading from "./componets/FoodHeading";
import ErrorMessage from "./componets/ErrorMessage";
import Container from "./componets/Container";
import FoodInput from "./componets/FoodInput";
import { useState } from "react";
function App() {
  let [textToshow, setTextState] = useState("Food Items Entered by user");
  let [foodItems, setFoodItems] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <FoodHeading />
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage data={foodItems}></ErrorMessage>
        <FoodItems data={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
