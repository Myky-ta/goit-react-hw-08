import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing...</p>;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
        />
      </Routes>
    </Layout>
  );
}



