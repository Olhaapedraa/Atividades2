function dataPorExtenso() {
  // Obtém o valor do campo de entrada da data
  let data = document.getElementById("data").value;
  
  // Cria um objeto Moment.js a partir da string da data
  let dataMoment = moment(data, "YYYY-MM-DD");
  
  // Obtém o dia, o mês e o ano da data
  let dia = dataMoment.format("DD");
  let mes = dataMoment.format("MMMM");
  let ano = dataMoment.format("YYYY");
  
  // Escreve a data por extenso no elemento de resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `${dia} de ${mes} de ${ano}`;
};

let botao = document.getElementById("botao");

botao.addEventListener("click", dataPorExtenso);