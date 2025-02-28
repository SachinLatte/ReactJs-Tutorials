import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () =>{
  const {todoItems} = useContext(todoItemsContext);
  return todoItems.length === 0 && <h1 className={`${styles.Heading} mb-5`}>Enjoy Your Day</h1>
}

export default WelcomeMessage;