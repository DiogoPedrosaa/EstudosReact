import React from 'react';

interface GaleriaProps {
  imagens: string[];
}

const GaleriaImagens: React.FC<GaleriaProps> = ({ imagens }) => {
  return (
    <div style={{ display: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {imagens.map((imagem, index) => (
        <img key={index} src={imagem} alt={`Imagem ${index}`} style={{ width: '200px', height: '200px', borderRadius: '8px' }} />
      ))}
    </div>
  );
}

export default GaleriaImagens;