import { useState } from "react";
import Item from "./Item";
let FoodItems = ({ data }) => {
let [activeItems, setActiveItems] = useState([]);
let onBuyButton = (item, event)=>{
let newItems = [...activeItems, item]
setActiveItems(newItems);
}
  return (
    <>
      <ul className="list-group">
        {data.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event)=> onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
