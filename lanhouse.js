function calcularValor() {
  const inValor = document.getElementById("inValor");
  const inTempo = document.getElementById("inTempo");
  const outValor = document.getElementById("outValor");

  let valor = Number(inValor.value);
  let tempo = Number(inTempo.value);

  let blocos = Math.ceil(tempo / 15);
  let total = blocos * valor;

  outValor.textContent = "Valor a Pagar R$: " + total.toFixed(2);
}

const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);