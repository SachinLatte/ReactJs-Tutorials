import Item from "./Item";
let FoodItems = ({ data }) => {
  return (
    <>
      <ul className="list-group">
        {data.map((element) => (
          <Item key={element} foodItems={element}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
