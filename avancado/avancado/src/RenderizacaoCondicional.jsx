const RenderizacaoCondicional = () => {
    const x = 5;
    const name = "Ana Cunha";
    return (
        <div>
            {/* Renderização consicional */}
            <h3>Será que é verdadeiro?</h3>
            {x > 2 && <p> Se x for true =  verdadeiro</p>}

            {/* Ternaria com Else */}
            <h3>Else -  Renderização Ternaria</h3>
            {name === "João" ?
                (
                    <div>
                        <p>Olá João</p>
                    </div>
                ): 
                (
                    <div>

                        <p> Esse nome não existe!   </p>
                    </div>

                )}
        </div>
    )
}

export default RenderizacaoCondicional;