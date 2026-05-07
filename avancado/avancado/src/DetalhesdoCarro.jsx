
const DetalhesdoCarro = ({ marca, Km, cor }) => {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Kilometragem: {Km}</li>
                <li>Cor: {cor}</li>
            </ul>
        </div>
    )
}

export default DetalhesdoCarro;