let atividades = [];
let input = document.getElementById("input");
let btn = document.getElementById("adicionar");
let btnApagar = document.getElementById("apagar");
let listaAtividades = document.getElementById("atividades");


btn.onclick = () => {
    let itemLista = document.createElement("li");
    itemLista.innerText = input.value;
    listaAtividades.append(itemLista)

    input.value = "";
}

btnApagar.onclick = () => {
    let itemsLista = document.querySelectorAll("#atividades li");
    
    if(itemsLista.length > 0){
        itemsLista[itemsLista.length - 1].remove();
    }
}