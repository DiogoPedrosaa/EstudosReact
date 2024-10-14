import React from 'react';

interface PersonagemProps {
  nome: string;
  classe: string;
  nivel: number;
  descricao: string;
  habilidades: string[];
}

const DetalhesPersonagem: React.FC<PersonagemProps> = ({ nome, classe, nivel, descricao, habilidades }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{nome}</h2>
      <p><strong>Classe:</strong> {classe}</p>
      <p><strong>Nível:</strong> {nivel}</p>
      <p>{descricao}</p>
      <h3>Habilidades:</h3>
      <ul>
        {habilidades.map((habilidade, index) => (
          <li key={index}>{habilidade}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesPersonagem;
