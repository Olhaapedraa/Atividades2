function classificarSenha() {
    // Obtém o valor da caixa de texto
    let senha = document.getElementById("senha").value;

    // Expressões regulares para verificar a força da senha
    let regexLetras = /[a-z]+|[A-Z]+/;
    let regexNumeros = /[0-9]+/;
    let regexEspeciais = /[@#!$%&*()\-+.=]+/;

    // Verifica a força da senha
    if (senha.match(regexLetras) && senha.match(regexNumeros) && senha.match(regexEspeciais)) {
        document.getElementById("forcaSenha").innerHTML = "Senha forte";
        document.getElementById("senha").classList.remove("fraca", "moderada");
        document.getElementById("senha").classList.add("forte");
    } else if (senha.match(regexLetras) && senha.match(regexNumeros)) {
        document.getElementById("forcaSenha").innerHTML = "Senha moderada";
        document.getElementById("senha").classList.remove("fraca", "forte");
        document.getElementById("senha").classList.add("moderada");
    } else {
        document.getElementById("forcaSenha").innerHTML = "Senha fraca";
        document.getElementById("senha").classList.remove("moderada", "forte");
        document.getElementById("senha").classList.add("fraca");
    }
}