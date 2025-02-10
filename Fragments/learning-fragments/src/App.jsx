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
  let [foodItems, setFoodItems] = useState([
    "Sabji",
    "Chicken",
    "Roti",
    "Salad",
    "Milk",
    "Butter",
  ]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log(`New food value entered is ${newFoodItem}`);
    }
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <FoodHeading />
        <ErrorMessage data={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={handleKeyDown} />
        {/* <p>{textToshow}</p> */}
        <FoodItems data={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
