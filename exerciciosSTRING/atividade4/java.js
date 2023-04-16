function separarfrase(){

    let texto = document.getElementById("texto").value;

    let frase = texto.split(/\s+/);

    let ocorrencia = {};

    for(let i = 0; i < frase.length; i++ ){

        let palavra = frase[i];

        if(ocorrencia[palavra] === undefined){
            ocorrencia[palavra] = 1;
        } else {
            ocorrencia[palavra]++;
        }
    };

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
	tabela.innerHTML = "";
	for (var palavra in ocorrencia) {
		var linha = tabela.insertRow(-1);
		var celulaPalavra = linha.insertCell(0);
		var celulaOcorrencias = linha.insertCell(1);
		celulaPalavra.innerHTML = palavra;
		celulaOcorrencias.innerHTML = ocorrencia[palavra];
	}
};

let botao = document.getElementById("botao");

botao.addEventListener("click", separarfrase);