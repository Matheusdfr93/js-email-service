function rando( { min = 8, max = 1800}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

const onj = {max:50, min: 48}
console.log(rando(onj))
console.log(rando({min:955}))