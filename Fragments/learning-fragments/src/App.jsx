import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./componets/FoodItems";
import FoodHeading from "./componets/FoodHeading";
import ErrorMessage from "./componets/ErrorMessage";
function App() {
  let foodItems = ["Sabji", "Chicken", "Roti", "Salad", "Milk"];
  return (
    <>
      <FoodHeading />
      <ErrorMessage data={foodItems}></ErrorMessage>
      <FoodItems data={foodItems}></FoodItems>
    </>
  );
}

export default App;
