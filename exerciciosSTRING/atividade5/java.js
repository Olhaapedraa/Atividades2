function estatistica(){

    let texto = document.getElementById("texto").value;
    let palavras = texto.split(/\s+/);
    let ocorrencias = {};
    let numpalavra = palavras.length;
    let numletra = texto.replace(/\s/g, '').length;
    let ocorrencia = 0;
    let palavramax = "";

    for (let i = 0; i < numpalavra; i++) {
        let palavra = palavras[i];
        if (ocorrencias[palavra] === undefined) {
          ocorrencias[palavra] = 1;
        } else {
          ocorrencias[palavra]++;
        }

        if (ocorrencias[palavra] > ocorrencia)
        {
            ocorrencia = ocorrencias[palavra];
            palavramax = palavra;
        }
    }

    document.getElementById("palavra").textContent = palavramax;
    document.getElementById("ocorrencias").textContent = ocorrencia;
    document.getElementById("numPalavras").textContent = numpalavra;
    document.getElementById("numLetras").textContent = numletra;
}

let botao = document.getElementById("botao");
botao.addEventListener("click", estatistica);
