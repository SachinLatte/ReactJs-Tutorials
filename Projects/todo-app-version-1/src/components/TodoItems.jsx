import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const todoItems = ({onDeleteClick }) => {
  const todoItems = useContext(todoItemsContext);
  console.log(todoItems);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((elem) => (
          <TodoItem todoDate={elem.dueDate} todoName={elem.name} onDeleteClick={onDeleteClick}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default todoItems;
