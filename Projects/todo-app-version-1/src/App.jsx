import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { todoItemsContext } from "./store/todo-items-store";
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

  const defaultTodoItems = [{name:"Buy Ghee",dueDate:"12/08/1990"}]
  return (
    <todoItemsContext.Provider value={defaultTodoItems}>
    <center className="content-container">
      <AppName />
      <WelcomeMessage todoItems = {todoItems} />
      <AddTodo onhandleChange={onhandleChange}/>
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
    </todoItemsContext.Provider>
  );
}

export default App;
