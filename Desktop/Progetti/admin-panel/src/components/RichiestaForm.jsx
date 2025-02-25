import React, { useState } from 'react';
import { db } from '../firebase';

const RichiestaForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [messaggio, setMessaggio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await db.collection('richieste').add({
      nome,
      email,
      messaggio,
      timestamp: new Date(),
    });

    setNome('');
    setEmail('');
    setMessaggio('');
    alert('Richiesta inviata con successo!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        value={messaggio}
        onChange={(e) => setMessaggio(e.target.value)}
        placeholder="Messaggio"
        required
      />
      <button type="submit">Invia Richiesta</button>
    </form>
  );
};

export default RichiestaForm;
