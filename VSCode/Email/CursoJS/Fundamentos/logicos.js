function compras (trabalho1, trabalho2){
    const ComprarSorvete = trabalho1 || trabalho2
    comprarTV50 = trabalho1 && trabalho2
    comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !ComprarSorvete

    return {ComprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))