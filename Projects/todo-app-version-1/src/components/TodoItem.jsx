function TodoItem({ todoName,todoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div key={todoName} className="col-6">{todoName}</div>
        <div key={todoDate} className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
