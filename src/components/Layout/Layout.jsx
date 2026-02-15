import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
