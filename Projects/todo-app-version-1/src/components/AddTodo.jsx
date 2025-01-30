function AddTodo() {
  return (
    <div className="container text-start">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter ToDO Here"
            required
            autoComplete="off"
          />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
