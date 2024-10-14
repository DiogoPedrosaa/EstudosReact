import React from 'react';
import './App.css';  // Opcional para estilização
import Card from './Card';
import ListaItens from './ListaItens';
import TabelaHabilidades from './TabelaHabilidades';
import Pesquisador from './Pesquisador';
import DetalhesPersonagem from './DetalhesPersonagem';
import GaleriaImagens from './GaleriaImagens';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Detalhes Cavalheiro da Luz</h1>

      <Pesquisador
  placeholder="Digite o nome do Item"
  onPesquisar={(query) => console.log("Procurando por:", query)}
/>
<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Card
          nome="Cavaleiro da Luz"
          classe="Guerreiro"
          descricao="Um cavaleiro destemido que luta pela justiça. Possui grande força e habilidades com espadas."
          imagemUrl=""  
        />

  


      <TabelaHabilidades
        habilidades={[
          { nome: "Explosão Sombria", descricao: "Libera uma explosão de energia negra." },
          { nome: "Teletransporte", descricao: "Move-se rapidamente para outra posição." },
        ]}
      />

<ListaItens
  itens={[
    { nome: "Espada Mágica", tipo: "Arma", raridade: "Rara" },
    { nome: "Poção de Vida", tipo: "Consumível", raridade: "Comum" },
    { nome: "Elmo de Ferro", tipo: "Armadura", raridade: "Incomum" }
  ]}
/>


<DetalhesPersonagem
  nome="Cavaleiro da Luz"
  classe="Guerreiro"
  nivel={35}
  descricao="Um cavaleiro destemido que luta pela justiça."
  habilidades={["Ataque Veloz", "Defesa de Aço", "Golpe de Luz"]}
/>



      </div>


      <h2> Outros Monstros: </h2>
<GaleriaImagens
  imagens={[
    "https://www.rollingstone.com/wp-content/uploads/2024/06/SOTE_FT.jpg?w=1581&h=1054&crop=1",
    "https://assetsio.gnwcdn.com/elden-ring-malenia-1_qpbTEkc.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    "https://assetsio.gnwcdn.com/elden-ring-erdtree-maggot-face.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
  ]}
/>
    </div>
  );
}

export default App;
