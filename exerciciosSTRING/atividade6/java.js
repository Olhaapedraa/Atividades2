function substituir(){

    let texto = document.getElementById("texto").value;
    let procurar = document.getElementById("palavrasub").value;
    let subs = document.getElementById("sub").value;

    let pal = new RegExp(procurar, "gi");
    let novafrase = texto.replace(pal, subs);

    document.getElementById("resultado").innerHTML = `${novafrase}`;
};

let botao = document.getElementById("botao");

botao.addEventListener("click", substituir);