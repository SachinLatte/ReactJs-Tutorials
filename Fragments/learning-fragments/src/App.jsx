import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./componets/FoodItems";
import FoodHeading from "./componets/FoodHeading";
import ErrorMessage from "./componets/ErrorMessage";
import Container from "./componets/Container";
function App() {
  let foodItems = ["Sabji", "Chicken", "Roti", "Salad", "Milk", "Butter"];
  return (
    <>
      <Container>
        <FoodHeading />
        <ErrorMessage data={foodItems}></ErrorMessage>
        <FoodItems data={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
