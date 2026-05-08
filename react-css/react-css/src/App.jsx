import './App.css'

import MeuComponente from './componentes/MeuComponente';

// Importando CSS modules
import Titulo from './componentes/Titulo';

function App() {

  const n = 15;
  const m = 35;

  // classe dinamica
  const brownTitulo = true;

  return (
   <div className='App'>
    {/* 1- CSS global */}
    <h1>CSS no React</h1>

    {/*  2- CSS do MeuComponente*/}
    <MeuComponente />
    <p>Pegou o CSS do componente</p>

    {/* 3- inline styles */}
    <p style={{color: "green", padding: "25px", borderLeft: "2px solid red"}}> Elemento com estilo inline</p>
   
   {/* 4- inline styles dinamico */}
   <h2 slyle={n > 10? {color:"yellow"}: {color:"red"} }>Inline style dinamico</h2>
   <h2 slyle={n > 45 ? {color:"yellow"}: {color:"red"} }>Inline style dinamico novamente</h2>
   
   {/* 5- Classe dinamica */}
   <h1 className={brownTitulo ? "brown-titulo" : "titulo"}>Titulo com Classes Dinamicas</h1>
   
   {/* 6- CSS modules */}
   <Titulo />
   
   </div>
  )
}

export default App;
