
// 3- importando Hierarquia de componente
import HierarquiaComponente from "../HierarquiaComponente";

// Comentario criado: componente
const PrimeiroComponente = () => {
    return (
        <div>
            <h2>Meu primeiro componente</h2>
            <HierarquiaComponente />
        </div>
    );
};

export default PrimeiroComponente;