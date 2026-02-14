// src/pages/ContactsPage/ContactsPage.jsx
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
