const modulaA = require('../../modulaa')
console.log(modulaA.bemVindo)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bem vindo')
    res.end()

}).listen(8080)
