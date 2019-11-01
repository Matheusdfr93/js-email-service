//Par Nome-Valor
const saudacao = 'Opa' //Contexto lexico

function exec(){
    const saudacao = 'Fala' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco:{
        rua: 'dos bobo',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)