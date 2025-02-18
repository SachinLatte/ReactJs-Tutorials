import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const todoItems = ({ todoItems, onDeleteClick }) => {
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
