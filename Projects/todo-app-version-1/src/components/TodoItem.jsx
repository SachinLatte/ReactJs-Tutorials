import { MdDelete } from "react-icons/md";
function TodoItem({ todoName,todoDate,onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div key={todoName} className="col-6">{todoName}</div>
        <div key={todoDate} className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button" onClick={()=> onDeleteClick(todoName)}><MdDelete /></button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
