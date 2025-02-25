import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase'; // Importa l'oggetto auth da Firebase
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser); // Ascolta i cambiamenti di stato dell'autenticazione
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div>
        {user ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </div>
    </Router>
  );
};

export default App;
