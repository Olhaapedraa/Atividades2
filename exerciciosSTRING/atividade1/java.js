function contar(){
    let texto = document.getElementById("texto").value;
    let palavras = texto.split(/\s+/);
    let numpalavra = palavras.length;
    let numletra = texto.replace(/\s/g, '').length;
    document.getElementById("num").innerHTML = `O número de palavras é: ${numpalavra} <br> O número de letras é: ${numletra}`;  
};

function ocorrencia(){

    let texto = document.getElementById("texto").value;

    let palavras = texto.split(/\s+/);

    let ocorrenciaDePalavras = {};
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        if (ocorrenciaDePalavras[palavra] === undefined) {
            ocorrenciaDePalavras[palavra] = 1;
        } else {
            ocorrenciaDePalavras[palavra]++;
        }

    };

    document.getElementById("ocorrencia").innerHTML = `${JSON.stringify(ocorrenciaDePalavras)}`;
};

function marcacao(){
    let texto = document.getElementById("texto").value;
    let palavraa = document.getElementById("palavra").value;
    palavraa = palavraa.trim();
    let regex = new RegExp(palavraa, "gi");
    let palavramarcada2 = texto.replace(regex, `<mark>${palavraa}</mark>`);
    document.getElementById("palavramarcada").innerHTML = `${palavramarcada2}`;
};

function substituir(){
    let texto = document.getElementById("texto").value;
    let pl = document.getElementById("pl").value;
    let pl2 = document.getElementById("pl2").value;
    let regex = new RegExp(pl, "gi");
    let substituicao = texto.replace(regex, `${pl2}`);
    document.getElementById("sub").innerHTML = `${substituicao}`;
};

let palavras = [];

let num = document.getElementById("botao");
let ocorrenciaa = document.getElementById("ocorrenciaa");
let palavramarcada = document.getElementById("marcar");
let sub = document.getElementById("subst");

num.addEventListener("click", contar);
ocorrenciaa.addEventListener("click", ocorrencia);
palavramarcada.addEventListener("click", marcacao);
sub.addEventListener("click", substituir);
