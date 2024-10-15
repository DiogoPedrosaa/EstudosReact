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
      <h1>Detalhes Malenia blade of Miquella</h1>

      <Pesquisador
  placeholder="Digite o nome do Item"
  onPesquisar={(query) => console.log("Procurando por:", query)}
/>
<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>

        <Card
          nome="Malenia Blade of Miquella"
          classe="Guerreiro"
          descricao="Malenia, Blade of Miquella e Malenia, Goddess of Rot é um Chefe Semideus de duas fases em Elden Ring. Ela é irmã gêmea de Miquella e ganhou fama por sua lendária batalha contra Starscourge Radahn durante a Shattering, na qual ela liberou o poder da Podridão Escarlate e reduziu Caelid a ruínas"
          imagemUrl="https://assetsio.gnwcdn.com/elden-ring-malenia-1_qpbTEkc.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"  
        />

  


      <TabelaHabilidades
        habilidades={[
          { nome: "Dança da Espada", descricao: "Malenia levanta a espada para a esquerda e dá 4 passos longos - após cada passo, ela ataca com uma série de ataques. Depois disso, ela salta em direção ao Tarnished com um ataque e executa um golpe final giratório, derrubando o alvo." },
          { nome: "Agarrão pelo Pescoço", descricao: "Malenia levantará a mão em preparação para um ataque de agarramento e, em seguida, atacará em linha reta em direção ao jogador muito rapidamente. Se a garra acertar, ela jogará o jogador no ar e o empalará, causando 2.225 de dano de impulso básico, antes de jogar seu corpo no chão. Durante a Fase dois, este ataque pode ser imediatamente seguido por uma varredura voadora + ataque de impulso. Este ataque não pode ser bloqueado ou desviado." },
          {nome: "Explosão Escarlate", descricao: "Apenas na fase dois. Malenia manterá seus movimentos originais da Fase um, no entanto, há uma chance de que ela faça uma continuação na maioria dos ataques, onde ela voa brevemente no ar e então bate com sua espada, causando uma enorme quantidade de dano e criando no chão um pequeno vórtice de podridão, que explode após um breve atraso e acumula podridão escarlate. A explosão também pode ocorrer a partir dos ataques violentos da Fase um, que ela pode acompanhar e resultar em uma Explosão Escarlate dupla."},
          {nome: "", descricao: ""},
        ]}
      />

<ListaItens
  itens={[
    { nome: "Almas", tipo: "Consumível", raridade: "Garantido" },
    { nome: "Grande runa de Malenia", tipo: "Consumível", raridade: "Garantido" },
    { nome: "Elmo Escarlate", tipo: "Armadura", raridade: "Incomum" }
  ]}
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
