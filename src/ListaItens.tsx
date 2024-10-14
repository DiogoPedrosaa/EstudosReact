import React from 'react';

interface Item {
  nome: string;
  tipo: string;
  raridade: string;
}

const ListaItens: React.FC<{ itens: Item[] }> = ({ itens }) => {
  return (
    <div>
      <h3>Itens Dropaveis</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {itens.map((item, index) => (
          <li key={index} style={{ background: '#f4f4f4', margin: '8px 0', padding: '10px', borderRadius: '4px' }}>
            <strong>{item.nome}</strong> - {item.tipo} ({item.raridade})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaItens;