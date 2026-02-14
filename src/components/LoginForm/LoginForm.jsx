// src/components/LoginForm/LoginForm.jsx.
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field type="email" name="email" placeholder="Email" className={styles.input} />
        <Field type="password" name="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
}
