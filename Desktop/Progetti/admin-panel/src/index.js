import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la nuova versione del DOM
import './index.css'; // Stile di base
import App from './App'; // Importa il componente App

// Aggiungi il root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendi il componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
