import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName,todoDate }) {
  const {deleteItem} = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div key={todoName} className="col-6">{todoName}</div>
        <div key={todoDate} className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button" onClick={()=> deleteItem(todoName)}><MdDelete /></button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
