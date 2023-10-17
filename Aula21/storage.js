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
    if (parseInt(segundoNumero.value) != 0) {
        let operationResult = parseInt(primeiroNumero.value) / parseInt(segundoNumero.value);
        resultado.innerText = 'O resultado da divisão é: ' + operationResult;
    } else {
        resultado.innerText = 'O segundo número não pode ser zero';
    }
}



let itemsDesejados = [];
let itemCompra = document.getElementById("itemCompra");
let adicionar = document.getElementById("adicionar");
let salvar = document.getElementById("salvar");
let visualizar = document.getElementById("visualizar");
let apagar = document.getElementById("apagar");
let itemsCompra = document.getElementById("itemsCompra");


adicionar.onclick = () => {
    itemsDesejados.push(itemCompra.value);
    itemCompra.value = ''
    console.log(itemsDesejados);
}

salvar.onclick = () => {
    let itemsJson = JSON.stringify(itemsDesejados);
    localStorage.setItem('items', itemsJson);
}

visualizar.onclick = () => {
    let itemsJson = localStorage.getItem('items');
    let itemsObjeto = JSON.parse(itemsJson);

    if (itemsObjeto.length > 0) {

        itemsObjeto.forEach(item => {
            let itemLista = document.createElement("li");
            itemLista.innerText = item;
            itemsCompra.append(itemLista);
        });
    }
}

apagar.onclick = () => {
    let itensLista = document.getElementsByTagName("li");
    let quantidadeItens = itensLista.length;
    localStorage.clear();
    itemsDesejados = [];

    if (itensLista.length > 0) {
        
        for(let index = 0; index < quantidadeItens; index++){
            itensLista[0].remove();
        }
    }
}