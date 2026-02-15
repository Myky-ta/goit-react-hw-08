import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import styles from './Navigation.module.css';

export default function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>

      {!isLoggedIn && (
        <>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
          <span className={styles.user}>Hello, {user.name}</span>
          <button
            type="button"
            className={styles.logout}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

