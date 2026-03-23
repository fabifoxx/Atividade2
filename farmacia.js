function mostrarPromocao(){
  const inMedicamento = document.getElementById("inMedicamento");
  const inPreco = document.getElementById("inPreco");
  const outMedicamento = document.getElementById("outMedicamento");
  const outPromocao = document.getElementById("outPromocao");

  let medicamento = inMedicamento.value;
  let preco = Number(inPreco.value);

  let total = preco * 2;
  let desconto = total - Math.floor(total);
  let totalFinal = total - desconto;

  outMedicamento.textContent = medicamento + " - Promoção:";
  outPromocao.textContent = "Leve 2 por R$: " + totalFinal.toFixed(2);
}

const btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);