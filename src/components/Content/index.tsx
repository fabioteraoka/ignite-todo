import Image from "next/image";
import { useState } from "react";
import check from "../../assets/check.svg";
import checked from "../../assets/checked.svg";
import trash from "../../assets/trash.svg";
import styles from "./Content.module.css";

interface TodoListProps {
  id: number;
  title: string;
  done: boolean;
  onDeleteTask: (id: number) => void;
  onChangeClosed: (id: number) => void;
}

export default function Index({id,done, title, onDeleteTask, onChangeClosed}: TodoListProps) {
  const [dones, setDones] = useState(done);
  const decoration = dones ? "line-through" : "none";
  const stateCheck = dones ? checked : check;
  const color = dones ? "var(--gray-300)" : "var(--gray-100)";

  function handleCheckBox() {
    if (dones === false) {
      setDones(true);
      onChangeClosed(id);
    } else {
      setDones(false);
      onChangeClosed(id)
    }
  }

  function handleDelete() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.mainContainerContent}>
      <div className={styles.containerContent}>
        <Image
          onClick={handleCheckBox}
          src={stateCheck}
          alt="check"
          className={styles.check}
        />
        <p>{title}</p>
      </div>
      <div>
        <button onClick={handleDelete} className={styles.trashContent}>
          <Image src={trash} alt="trash"  />
        </button>
      </div>
        <style jsx>{`
         p{
           text-decoration: ${decoration};
           color:${color}
      `}</style>
    </div>
  );
}


