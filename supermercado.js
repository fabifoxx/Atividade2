function mostrarPromocao() {
  const inProduto = document.getElementById("inProduto");
  const inPreco = document.getElementById("inPreco");
  const outProduto = document.getElementById("outProduto");
  const outPromocao = document.getElementById("outPromocao");
  const outTerceiro = document.getElementById("outTerceiro");

  let produto = inProduto.value;
  let preco = Number(inPreco.value);

  let terceiro = preco * 0.5;
  let total = preco * 2 + terceiro;

 
  outPromocao.textContent =  produto +" Promoção Leve 3 por R$: " + total.toFixed(2);
  outTerceiro.textContent = "O 3º produto custa apenas R$: " + terceiro.toFixed(2);
}

const btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);