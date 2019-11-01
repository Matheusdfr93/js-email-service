const pessoa = {
    nome:'ana',
    idade: 5,
    endereco:{
        logradouro:'Rua ABC',
        numero: 100
    }
}

//Extrai do objeto o nome e a idade
const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true}
console.log(sobrenome, bemHumorado)

const{ endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

