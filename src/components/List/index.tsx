import styles from "./List.module.css";
import Empty from "../Empty";
import Content from "../Content";
import { useState } from "react";

interface TodoListProps {
  id: number;
  title: string;
  done: boolean;
}
const todoList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit der",
    done: false,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit der",
    done: true,
  },
];


export default function Index() {
  const [countTask, setCountTask] = useState((todoList.length));
  const [taskClosed, setTaskClosed] = useState(
    todoList.filter((task) => task.done === true).length
  );


  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>
            Tarefas Criadas <strong>{countTask}</strong>
          </h1>
          <h1>
            Concluídas <strong>{taskClosed}</strong>{" "}
          </h1>
        </header>
        <main className={styles.main}>
          {countTask === 0 ? (
            <Empty />
          ) : (
            todoList.map(todo => (
              <Content
                key={todo.id}
                id={todo.id}
                title={todo.title}
                done={todo.done}
              />  
            ))
          )}
          
        </main>
      </div>
    </div>
  );
}
