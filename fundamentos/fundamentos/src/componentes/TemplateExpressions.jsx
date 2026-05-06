const TemplateExpressions = () => {

    // declarando uma variavel
    const nome = "Ana";

    // declarando um objeto
    const dados = {
        idade: 36,
        profissao: "Professora"
    }
  return (
    <div>
        <p> A soma é {4 + 9} </p>
        <h3>Boas-vindas {nome}</h3>
        <p>Vi aqui que voce tem {dados.idade} anos e é {dados.profissao}</p>
    </div>
  )
}

export default TemplateExpressions;