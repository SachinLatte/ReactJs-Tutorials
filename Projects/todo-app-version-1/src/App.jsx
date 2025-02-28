import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";
import "./App.css";
import { todoItemsContext } from "./store/todo-items-store";
function App() {
  return (
    <TodoItemsContextProvider>
    <center className="content-container">
      <AppName/>
      <WelcomeMessage/>
      <AddTodo/>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
  );
}
export default App;
