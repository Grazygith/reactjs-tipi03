import './App.css'

// 1- importando primeiro componente
import PrimeiroComponente from './componentes/PrimeiroComponente'

// 2- importando template expression
import TemplateExpressions from './componentes/TemplateExpressions';

// importanto Hierarquia de componente
import HierarquiaComponente from './HierarquiaComponente';

// importando evento click
import EventoClick from './EventoClick';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do react</h1>
      {/* 1- importando primeiro componente */}
      <PrimeiroComponente />
      {/*  2 - importando segundo componente */}
      <TemplateExpressions />
      {/* 3- importando terceiro componente */}
      <HierarquiaComponente />
      {/* 4- importando quarto componente */}
      <EventoClick/>
    </div>

  );
}

export default App;
