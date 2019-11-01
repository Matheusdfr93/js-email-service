console.log(Math.ceil(6,1))

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Objetos(nome){
    this.nome = nome;
}

const obj2 = new Objetos ('cadeiras')
const obj3 = new Objetos ('Mesas')
console.log(obj2)
console.log(obj3)