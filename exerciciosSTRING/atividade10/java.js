function diasvividos(){

    let data = new Date(document.getElementById("data").value);
    let datahoje = new Date();

    let diferença = datahoje.getTime() - data.getTime();
    let dias = Math.floor(diferença / (1000*60*60*24));

    document.getElementById("resultado").innerHTML = `A sua quantidade de dias vividos é: ${dias}`;
};

let botao = document.getElementById("botao");

botao.addEventListener("click", diasvividos);