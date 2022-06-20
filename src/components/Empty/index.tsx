import Image from "next/image";
import clipboard from "../../assets/Clipboard.svg";
import styles from "./Empty.module.css";

export default function Index() {
  return (
    <div className={styles.listEmpty}>
      <Image src={clipboard} alt="clipboard"></Image>
      <h1>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </h1>
      <h1>Crie tarefas e organize seus itens a fazer</h1>
    </div>
  );
}
