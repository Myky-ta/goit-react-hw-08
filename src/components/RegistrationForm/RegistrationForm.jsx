// src/components/RegistrationForm/RegistrationForm.jsx
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <Field type="text" name="name" placeholder="Name" className={styles.input} />
        <Field type="email" name="email" placeholder="Email" className={styles.input} />
        <Field type="password" name="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
}
