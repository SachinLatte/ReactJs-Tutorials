import AddInput from "./AddInput";
import DateInput from "./DateInput";
import AddButton from "./AddButton";
import {useRef} from "react";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const {addNewItem} = useContext(todoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
// Add button event to add task to the list
  const handleaddButtonClicked = (event)=>{
    event.preventDefault();
    let todoName  = todoNameElement.current.value;
    let todoDate  = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value ="";
    addNewItem(todoName,todoDate);
  }
  return (
    <div className="container text-start">
      <form action = "" onSubmit={handleaddButtonClicked} className="row kg-row" >
        <div className="col-6">
          <AddInput todoNameElement = {todoNameElement}/>
        </div>
        <div className="col-4">
          <DateInput dueDateElement = {dueDateElement}  />
        </div>
        <div className="col-2">
          <AddButton/>
        </div>
        </form>
      </div>
  );
}
export default AddTodo;
