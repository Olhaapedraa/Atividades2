function marcarvogal(){

    let texto = document.getElementById("texto").value;

    let frase = texto.length;

    let novafrase = "";

    for(let i = 0; i<frase; i++)
    {
        let letra = texto.charAt(i);
        if(letra == 'a' ||  letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' || letra == 'u' || letra == 'U' )
        {
            novafrase += "<b>" + letra + "</b>";
        }
        else {
            novafrase += letra;
        }
    }

    document.getElementById("resultado").innerHTML = `${novafrase}`;
};

let botao = document.getElementById("botao");

botao.addEventListener("click", marcarvogal);
  