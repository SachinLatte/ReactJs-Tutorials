import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {

  const [todoItems, setnewItems] = useState([]);
  const onhandleChange = (nameItem, dateItem) =>{
    console.log(`Your entered name is ${nameItem} and the date is ${dateItem}`)
    const neTodoItem = [...todoItems,{name:nameItem,dueDate:dateItem}];
    setnewItems(neTodoItem);
  }
  return (
    <center className="content-container">
      <AppName />
      {todoItems.length === 0 && <WelcomeMessage/>}
      <AddTodo onhandleChange={onhandleChange}/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
