let primeiroNumero = document.getElementById("primeironumero");
let segundoNumero = document.getElementById("segundonumero");

let soma = document.getElementById("soma");
let subtracao = document.getElementById("subtracao");
let multiplicacao = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");

let resultado = document.getElementById("resultado");

soma.onclick = () => {
    let operationResult = parseInt(primeiroNumero.value) + parseInt(segundoNumero.value);
    resultado.innerText = 'O resultado da soma é: ' + operationResult;
}
subtracao.onclick = () => {
    let operationResult = parseInt(primeiroNumero.value) - parseInt(segundoNumero.value);
    resultado.innerText = 'O resultado da subtração é: ' + operationResult;
}
multiplicacao.onclick = () => {
    let operationResult = parseInt(primeiroNumero.value) * parseInt(segundoNumero.value);
    resultado.innerText = 'O resultado da multiplicação é: ' + operationResult;
}
divisao.onclick = () => {
    if( parseInt(segundoNumero.value) != 0){
        let operationResult = parseInt(primeiroNumero.value) / parseInt(segundoNumero.value);
        resultado.innerText = 'O resultado da divisão é: ' + operationResult;
    }else{
        resultado.innerText = 'O segundo número não pode ser zero';
    }
   
}