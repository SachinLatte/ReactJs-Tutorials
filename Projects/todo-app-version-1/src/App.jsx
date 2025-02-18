import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  //Add Items to the app
  const [todoItems, setnewItems] = useState([]);
  const onhandleChange = (nameItem, dateItem) =>{
    setnewItems((currValue) =>{
    const newTodoItems = [...currValue,{name:nameItem,dueDate:dateItem}];
    return newTodoItems;
    });
  }
  //Delete the Items
  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems =  todoItems.filter((item)=> item.name !== todoItemName);
    setnewItems(newTodoItems)
  }
  return (
    <center className="content-container">
      <AppName />
      {todoItems.length === 0 && <WelcomeMessage/>}
      <AddTodo onhandleChange={onhandleChange}/>
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
