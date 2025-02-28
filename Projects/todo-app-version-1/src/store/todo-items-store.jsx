import { createContext } from "react";
import { useReducer } from "react";

export const todoItemsContext = createContext({
  todoItems : [],
  deleteItem : ()=>{},
  addNewItem : ()=>{}
});

const todoItemsReducer = (currTodoItems, action)=>{
  let newTodoItems =  currTodoItems;
  if(action.type === "NEW_ITEM"){
    newTodoItems = [...currTodoItems,{name:action.payload.nameItem,dueDate:action.payload.dateItem}];
  }
  else if(action.type === "DELETE_ITEM"){
    newTodoItems =  currTodoItems.filter((item)=> item.name !== action.payload.nameItem);
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({children}) =>{
  //Add Items to the app
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (nameItem, dateItem) =>{
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        nameItem,
        dateItem
      }
    }
    dispatchTodoItems(newItemAction);
  }

  //Delete the Items
  const deleteItem = (todoItemName) =>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        nameItem : todoItemName
      }
    }
    dispatchTodoItems(deleteItemAction);
  }
  return ( 
  <todoItemsContext.Provider 
  value={{todoItems,
  addNewItem,
  deleteItem}}
  >
    {children}
  </todoItemsContext.Provider>
  );
}

export default TodoItemsContextProvider