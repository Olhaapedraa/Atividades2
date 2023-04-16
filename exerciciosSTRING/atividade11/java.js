function difencadata(){

    let data1 = new Date(document.getElementById("data1").value);
    let data2 = new Date(document.getElementById("data2").value);

    const diff = Math.abs(data2.getTime() - data1.getTime());
	const diffWeeks = Math.ceil(diff / (1000 * 3600 * 24 * 7));
	document.getElementById("resultado").innerHTML = `${diffWeeks} semanas`;
};

let botao = document.getElementById("botao");

botao.addEventListener("click", difencadata);