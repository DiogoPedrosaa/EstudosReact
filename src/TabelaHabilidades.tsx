import React from 'react';

interface Habilidade {
  nome: string;
  descricao: string;
}

const TabelaHabilidades: React.FC<{ habilidades: Habilidade[] }> = ({ habilidades }) => {
  return (
    <div>
      <h3>Habilidades</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nome</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {habilidades.map((habilidade, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{habilidade.nome}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{habilidade.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaHabilidades;
