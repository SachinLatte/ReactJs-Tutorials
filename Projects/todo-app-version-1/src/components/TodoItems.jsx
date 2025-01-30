import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const todoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((elem) => (
          <TodoItem todoDate={elem.dueDate} todoName={elem.name}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default todoItems;
