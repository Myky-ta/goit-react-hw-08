// src/components/ContactForm/ContactForm.jsx
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className={styles.input}
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
}
