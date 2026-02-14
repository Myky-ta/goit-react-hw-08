// src/components/RegistrationForm/RegistrationForm.jsx
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values)); // values = { name, email, password }
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          className={styles.input}
          required
        />
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
          autoComplete="new-password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
}
