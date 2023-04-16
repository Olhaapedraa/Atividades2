function trocarfrase() {
    
    let frase = document.getElementById("texto").value;

    
    let letrasTroca = {
        "T": "P", "P": "T", 
        "E": "O", "O": "E", 
        "N": "L", "L": "N", 
        "I": "A", "A": "I", 
        "S": "R", "R": "S"
    };

   
    let caracteres = frase.split("");

   
    let fraseCodificada = "";
    for (let i = 0; i < caracteres.length; i++) {
        let letra = caracteres[i].toUpperCase();
        if (letra in letrasTroca) {
            letra = letrasTroca[letra];
        }
        fraseCodificada += letra;
    }

    
    document.getElementById("resultado").innerHTML = fraseCodificada;
}

let botao = document.getElementById("botao");

botao.addEventListener("click", trocarfrase);