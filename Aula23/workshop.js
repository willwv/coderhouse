let backgroundColorIndex = 0;
let backgroundColors = ['red', 'blue', 'yellow', 'pink', 'green', 'white'];
let btnCorTela = document.getElementById('btnTela')

btnCorTela.onclick = () => {
    if(backgroundColorIndex == backgroundColors.length){
        backgroundColorIndex = 0;
    }

    document.body.style.backgroundColor = backgroundColors[backgroundColorIndex];
    backgroundColorIndex++;
};

// increment decrement
let btnMenos = document.getElementById('btnMenos');
let btnMais = document.getElementById('btnMais');
let variable = document.getElementById('variable');

btnMenos.onclick = () => {
    let variableNumber = parseInt(variable.innerText);

    if(variableNumber <= 0){
        variableNumber = 0;
    }else{
        variableNumber --;
    }

    variable.innerText = variableNumber;
};

btnMais.onclick = () => {
    let variableNumber = parseInt(variable.innerText);

    if(variableNumber >= 5){
        variableNumber = 5;
    }else{
        variableNumber ++;
    }

    variable.innerText = variableNumber;
};

//verificar divisao

let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let btnVerificarDivisao = document.getElementById('btnVerificarDivisao');
let resultadoDivisao = document.getElementById('resultadoDivisao');

btnVerificarDivisao.onclick = () => {
    if(parseInt(secondNumber.value) == 0 ){
        resultadoDivisao.innerText = 'O segundo número deve ser diferente de zero.'
    }else{
        let divisivel = parseInt(firstNumber.value) % parseInt(secondNumber.value);
        resultadoDivisao.innerText = divisivel == 0 ? 'O segundo número é divisível pelo primeiro' : 'O segundo número não é divisível pelo primeiro' 
    }
}

//meses
let meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
];

let inputMes = document.getElementById('inputMes');
let resultadoMes = document.getElementById('resultadoMes');

inputMes.onchange = () => {
    let mes = parseInt(inputMes.value);
    if(mes >= 1 && mes <= 12){
        resultadoMes.innerText = meses[mes-1];
    }else{
        resultadoMes.innerText = 'valor de mês incorreto';
    }
}

//frase
let inputFrase = document.getElementById('inputFrase');
let resultadoFrase = document.getElementById('resultadoFrase');

inputFrase.onchange = () => {
    let frase = inputFrase.value;
    resultadoFrase.innerText = "Essa frase/palavra contém " + frase.length + " caracteres."
}