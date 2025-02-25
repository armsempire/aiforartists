import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // Importa db dal tuo file firebase.js

const Dashboard = () => {
  const [richieste, setRichieste] = useState([]);

  useEffect(() => {
    const fetchRichieste = async () => {
      // Usa la nuova sintassi per ottenere i dati dalla collezione
      const querySnapshot = await getDocs(collection(db, 'richieste'));
      setRichieste(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchRichieste();
  }, []);

  return (
    <div>
      <h2>Dashboard Admin</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Messaggio</th>
          </tr>
        </thead>
        <tbody>
          {richieste.map((richiesta, index) => (
            <tr key={index}>
              <td>{richiesta.nome}</td>
              <td>{richiesta.email}</td>
              <td>{richiesta.messaggio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
