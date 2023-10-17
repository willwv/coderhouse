// Atividade CEP
let buscarCep = document.getElementById("buscarCep");

buscarCep.onclick = () => {
    let cep = document.getElementById("cep").value;

    if (cep.length != 8) {
        alert("O CEP precisa ter 8 digitos.")
    } else {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(response => exibirInformacoesNaTela(response))
    }
}

function exibirInformacoesNaTela(informacao) {
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    rua.value = informacao.logradouro;
    bairro.value = informacao.bairro;
    cidade.value = informacao.localidade;
    estado.value = informacao.uf;
}

// Atividade países
let buscarPais = document.getElementById("buscarPais");

buscarPais.onclick = () => {
    let pais = document.getElementById("pais").value;

    fetch(`https://restcountries.com/v3.1/name/${pais}`)
        .then(response => response.json())
        .then(response => exibirInformacoesDoPaisNaTela(response))
}

function exibirInformacoesDoPaisNaTela(informacoes) {
    let nomeOficial = document.getElementById("nomeOficial");
    let divBandeira = document.getElementById("bandeira");

    let imgHtml = document.createElement("img");
    imgHtml.src = informacoes[0].flags.png;
    imgHtml.alt = informacoes[0].flags.alt;

    divBandeira.append(imgHtml);

    nomeOficial.value = informacoes[0].name.nativeName.deu.official;
}