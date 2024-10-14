import React, { useState } from 'react';

interface PesquisadorProps {
  placeholder: string;
  onPesquisar: (query: string) => void;
}

const Pesquisador: React.FC<PesquisadorProps> = ({ placeholder, onPesquisar }) => {
  const [query, setQuery] = useState('');

  const handlePesquisar = () => {
    onPesquisar(query);
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder={placeholder} 
        style={{ padding: '8px', width: '200px' }}
      />
      <button onClick={handlePesquisar} style={{ padding: '8px', marginLeft: '8px' }}>Pesquisar</button>
    </div>
  );
}

export default Pesquisador;
