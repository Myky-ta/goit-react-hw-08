import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing, selectIsLoggedIn } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route
        path="/register"
        element={isLoggedIn ? <Navigate to="/contacts" /> : <h1>Registration Page</h1>}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/contacts" /> : <h1>Login Page</h1>}
      />
      <Route
        path="/contacts"
        element={isLoggedIn ? <h1>Contacts Page</h1> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
