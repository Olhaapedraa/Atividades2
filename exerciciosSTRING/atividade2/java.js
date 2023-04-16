function inverterfrase(){

    let texto = document.getElementById("texto").value;

    let textoinvert = "";

    for(let i = texto.length - 1; i>=0; i--)
    {
        textoinvert += texto[i];
    }

    document.getElementById("resultado").innerHTML = `${textoinvert}`;
};

let botao = document.getElementById("inverte");

botao.addEventListener("click", inverterfrase);