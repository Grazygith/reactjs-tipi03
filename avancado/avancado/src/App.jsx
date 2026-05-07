import './App.css';

// 9 - Importando imagem do assets
import ibirapuera from './assets/ibirapuera.jpg';

// 10- Importando Hooks  - UseStates
import Dados from './componentes/Dados';

// Importando lista Renderizar
import ListaRenderizacao from './componentes/ListaRenderizacao';

// 12- Importando renderização condicional
import RenderizacaoCondicional from './RenderizacaoCondicional';

// 13- Props
import MostrarNomeUsuario from './MostrarNomeUsuario';

//14- Deestruturando props
import DetalhesdoCarro from './DetalhesdoCarro';

// 15- Renderização com loop - da lista de componentes
const carros = [
  { id: 1, marca: "Fiat", cor: "Verde", Km: 0 }
  { id: 2, marca: "Ford", cor: "preto", Km: 12000 }
  { id: 3, marca: "Cintroen", cor: "Vermelho", Km: 100000 }
];


function App() {

  return (
    <div className="AppAvancado">

      {/* 8 - Inserindo imagem do public */}
      <img src="/SP.jpg" alt="Imagem de cima, São Paulo" />


      {/* 9- Importando imagem do assets */}
      <img src={ibirapuera} alt="Foto do Parque Ibirapuera, vista de cima" />

      {/* 10- Importando dados */}
      <Dados />

      {/* 11- Importando lista renderização */}
      <ListaRenderizacao />

      {/*  Importando Renderização condicional */}
      <RenderizacaoCondicional />

      {/* 13- props */}
      <MostrarNomeUsuario name="Ana" />

      {/* Desestrurturacao do props */}
      <DetalhesdoCarro marca="BMW" km={200} cor="azul" />;

      {/* Reaproveitando a props */}
      <DetalhesdoCarro marca="HRV" km={500} cor="prata" />;
      <DetalhesdoCarro marca="Onix" km={1500} cor="branco" />;

      {/* Renderização com loop - da lista de componentes */}
      {carros.map((carros) => (
        <DetalhesdoCarro key={carros.id} marca={carros.marca} cor={carros.cor} Km={carros.Km} />
      ))}
    </div>
  )

}

export default App;
