import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const todoItems = () => {
  const {todoItems} = useContext(todoItemsContext);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((elem) => (
          <TodoItem key={elem.name} todoDate={elem.dueDate} todoName={elem.name}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default todoItems;
