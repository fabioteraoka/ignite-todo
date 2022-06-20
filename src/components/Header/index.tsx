import Image from 'next/image';
import logo from '../../assets/Logo.svg';
import styles from './Header.module.css';

export default function index() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="logo" />
    </header>
  )
}

