import React from 'react';

interface CardProps {
  nome: string;
  classe: string;
  descricao: string;
  imagemUrl: string;  // URL da imagem do personagem ou item
}

const Card: React.FC<CardProps> = ({ nome, classe, descricao, imagemUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
      <img src={imagemUrl} alt={nome} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{nome}</h2>
      <p><strong>Classe:</strong> {classe}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;
