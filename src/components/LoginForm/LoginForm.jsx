// src/components/LoginForm/LoginForm.jsx
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)); // values = { email, password }
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          className={styles.input}
          required
        />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
}

        <Field type="password" name="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
}
