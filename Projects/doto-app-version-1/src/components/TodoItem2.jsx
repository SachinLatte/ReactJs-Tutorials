function TodoItem2() {
  let todoName = "Wash Car";
  let todoDate = "6/10/2023";
  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
