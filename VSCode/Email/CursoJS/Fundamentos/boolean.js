let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo)
console.log('Verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!Infinity)

console.log('Falsos')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Finalizando...')
console.log(!!(''||null||0||' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')