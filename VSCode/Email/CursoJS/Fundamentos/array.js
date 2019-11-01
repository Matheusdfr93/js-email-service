const valores = [7, 5, 4, 3, 5.8, 9.2]
console.log(valores[0], valores[5])
console.log(valores[66666])

valores [66666] = 10
console.log(valores[66666])
console.log(valores.length)


valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Esclui o ultimo elemento do array
console.log(valores.pop())
delete valores [0]
console.log(valores)

console.log(typeof valores)

