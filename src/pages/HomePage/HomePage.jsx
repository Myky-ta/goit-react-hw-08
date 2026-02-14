// src/pages/HomePage/HomePage.jsx
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Ласкаво просимо до застосунку «Книга контактів»!
      </p>
      <p className={styles.text}>
        Зареєструйтесь або увійдіть, щоб керувати власною колекцією контактів.
      </p>
    </div>
  );
}
