import AddInput from "./AddInput";
import DateInput from "./DateInput";
import AddButton from "./AddButton";
import { useState } from "react";
function AddTodo({onhandleChange}) {
  const [todoName, setTodoName] = useState("");
  const onnameinputChange = (event) => {
      let newName = event.target.value;
      setTodoName(newName);
  }
  const [todoDate, setTodoDate] = useState("");
  const ondateInputChange= (event) =>{
    let newDate = event.target.value;
    setTodoDate(newDate);
  }

  const handleaddButtonClicked = ()=>{
    onhandleChange(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (
    <div className="container text-start">
      <div className="row kg-row">
        <div className="col-6">
          <AddInput onnameinputChange={onnameinputChange} todoName={todoName} />
        </div>
        <div className="col-4">
          <DateInput ondateInputChange={ondateInputChange} todoDate={todoDate}  />
        </div>
        <div className="col-2">
          <AddButton onhandleChange={handleaddButtonClicked}/>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
