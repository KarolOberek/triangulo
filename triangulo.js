const prompt = require('prompt-sync')()

const triangulos = []

while(true){

let a = +prompt("Digite o lado a do triangulo: ")
let b = +prompt("Digite o lado b do triangulo: ")
let c = +prompt("Digite o lado c do triangulo: ")

if ((a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b)){
    let tipo 
    if (a === b && b === c){
    tipo ="Triangulo equilátero"

    } else if (a === b || a === c || b === c){
        tipo = "Triângulo isóceles"
    }else {
        tipo = "Triângulo escaleno"
    }
    triangulos.push({a ,b , c , tipo})
    console.log(triangulos)
}else {
    console.log("Não é um triângulo")
}   
    let sair = prompt("Deseja sair?").toLowerCase()
    if (sair == "sim"){
        break
    }
}
console.log("Triângulos cadastrados:", triangulos);