let atividades = [];
let input = document.getElementById("input");
let btn = document.getElementById("adicionar");
let btnVisualizar = document.getElementById("visualizar");
let btnApagar = document.getElementById("apagar");

btn.onclick = () => {
    atividades.push(input.value);
    input.value = "";
}

btnVisualizar.onclick = () => {
    console.log(atividades);
}

btnApagar.onclick = () => {
    atividades = [];
}