// src/components/Filter/Filter.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts..."
      className={styles.input}
    />
  );
}
