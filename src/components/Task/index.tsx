import Image from "next/image";
import plus from "../../assets/plus.svg";
import styles from "./Task.module.css";
import Empty from "../Empty";
import Content from "../Content";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Index() {
  interface TodoListProps {
    id: number;
    title: string;
    done: boolean;
    onDeleteTask: (id: number) => void;
    onChangeClosed: () => void;
  }

  const list = [{
    id:1,
    title: "Learn Next.js",
    done: false,
}];

  const [todoTask, setTodoTask] = useState(list);
  const [newTodoTask, setNewTodoTask] = useState('');
  const [countTask, setCountTask] = useState(todoTask.length);
  const [taskClosed, setTaskClosed] = useState(
    todoTask.filter((task) => task.done === true).length
  );

  
  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    setTodoTask([...todoTask, { id: todoTask.length + 1, title: newTodoTask, done: false }]);
    setCountTask(todoTask.length + 1);
    setNewTodoTask('');

  }

  function deleteTask(todoTaskToDelete: number) {
    const newTodoTask = todoTask.filter((task) => task.id !== todoTaskToDelete);
    setTodoTask(newTodoTask);
    setCountTask(newTodoTask.length);
    setTaskClosed(newTodoTask.filter((task) => task.done === true).length);
  }

  function changeClosed(todoTaskToChange: number) {
    const newTodoTask = todoTask.map(task => {
      if (task.id === todoTaskToChange) {
        return { ...task, done: !task.done }
       ;
      }
      return task;
    },
    );
    setTodoTask(newTodoTask);
    setTaskClosed(newTodoTask.filter((task) => task.done === true).length);

  }


  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewTodoTask(event.target.value);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <form onSubmit={handleCreateNewTodo}>
            <textarea
              name="task"
              onChange={handleNewTodoChange}
              value={newTodoTask}
              className={styles.input}
              placeholder="Adicione uma nova tarefa"
            />
            <button className={styles.button}>
              Criar
              <Image src={plus} alt="plus" />
            </button>
          </form>
        </div>
      </div>

      

      <div className={styles.mainContainerTodo}>
        <div className={styles.containerTodo}>
          <header className={styles.headerTodo}>
            <h1>
              Tarefas Criadas <strong>{countTask}</strong>
            </h1>
            <h1>
              Concluídas <strong>{taskClosed}</strong>{" "}
            </h1>
          </header>
          <main className={styles.mainTodo}>
            {countTask === 0 ? (
              <Empty />
            ) : (
              todoTask.map((todo) => (
                <Content
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  done={todo.done}
                  onDeleteTask={deleteTask}
                  onChangeClosed={changeClosed}
                />
              ))
            )}
          </main>
        </div>
      </div>
    </>
  );
}
