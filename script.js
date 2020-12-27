const n1 = ["casa", "escola", "carro"]
function imprimir (item, i, cas){
    console.log(`${i + 1}, ${item}`)
}
n1.forEach (imprimir)
n1.forEach(function(a, b){
    console.log(a, b)
})