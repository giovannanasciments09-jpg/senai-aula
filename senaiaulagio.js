let nome = prompt("qual o seu nome?")
let numPedido = prompt("qual o numero do pedido?")
const nomeLanchonet = "Lanchonet"
let nomeProduto = prompt("qual produto voce quer?")
let preco = Number(prompt("qual o preco do produto?"))
let valortotal = preco * quantidade
let quantidade = Number(prompt("quantos voce quer?"))
alert(" o valor total foi: " + valortotal)
const subtotal = preco * quantidade
let taxaEmbalagem = 2
let valorTotal = subtotal + taxaEmbalagem
console.log("cliente:", nome)
console.log("numero:", numPedido)
console.log("produto:", nomeProduto)
console.log("preço unitario: R$ ", preco)
console.log("quantidade: ", quantidade)
console.log("valor total: R$", valortotal.toFixed(2))
if (quantidade <= 0) {
    alert("erro")
} else if (quantidade > estoque) {
    alert("erro quantidade maior que o estoque")
}
if (subtotal >= 100) {
    console.log("preço unitario: R$ ", preco);
    console.log("quantidade: ", quantidade);
    console.log("estoque restante: ", estoqueFinal);
    console.log("valor total: R$", valorTotal.toFixed(2))
} else if (subtotal >= 50 && subtotal < 100) {
    alert(subtotal / 5 + subtotal)
} else {
    console.log("pedido recusado");
}
//exemplo
//  let produtos = [] //array vazio
//  produtos = ["Sanduiche" ,4, "Hamburguer" ,true, "coxinha" ,"suco"]
//  let tamanho = produtos.lenght // tamanho 4
//  console.log(produtos[2]) 

