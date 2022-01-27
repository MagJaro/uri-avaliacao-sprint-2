//Dado um cenário onde temos a resposta do servidor com dados de alguns usuários, e precisamos fazer alguns reajustes 
//salariais. Extraia do arquivo dados.json esses dados que deveram ser processados, seguindo a regra de négocio:
// Regras de negócio
// [ ] Toda a base de percentuais, serão de acordo com o salário e cargo atual;
// [ ] Adicionar o percentual fixo no atual salário de acordo com o cargo;
// [ ] A cada ano a mais de admissão é acrescido mais 3% no salário;
// [ ] Os calculos só deveram ser feitos para funcionários que ainda estão admitidos;
// Modelo de resposta esperado
// Para responder corretamente ao exercicio, será necessário criar um novo objeto de resposta. Nesse objeto devera conter apenas as seguintes informações: nome, cargo, antigo salário e novo salário.

// Output de resposta
// Fique a vontade para criar uma resposta que mostre de forma simples ao usuário, como por exemplo imprimir algo como exemplo abaixo no console:

// "Seguem os dados atualizados do funcionário nome-funcionario:
// Cargo: cargo-funcionario,
// Antigo salário: R$0.000,00,
// Novo salário: R$0.000,00"

const dados = require('./../dados.json');

const funcionarios = dados.filter(e => e.demitido === false)//funcionários admitidos 
let dadosAtualizados = []; //guardar os dados finalizados 

dadosAtualizados = funcionarios.map(e => {
    let funcionario = {
        nome: e.nome,
        cargo: '',
        antigoSalario: 0,
        novoSalario: 0
    }
    let cargo = e.cargos.filter(Element => Element.atual === true)//filtro p/ pegar só o cargo atual

    funcionario.cargo = cargo[0].nome;
    funcionario.antigoSalario = cargo[0].salario;

    let percentual = cargo[0].percentual;
    let comecou = cargo[0].comecou_em;

    funcionario.novoSalario = reajuste(funcionario.antigoSalario, comecou, percentual)

    return funcionario
})

function reajuste(salario, inicio, percentual){
    salario *  3%
    // return 0;
}

console.log(dadosAtualizados)