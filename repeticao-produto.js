let catalogoProdutos = [];
let tamanhocatalogo = 0;
let continuarcadastro = false;
do{
    catalogoProdutos[catalogoProdutos].nome = prompt("nome do produto:");
    catalogoProdutos[tamanhocatalogo].preco = prompt("qual o preco: ");
    catalogoProdutos[tamanhocatalogo].estoque = prompt("qual o estoque: ");
    continuarcadastro = Boolean(prompt("quer continuar cadastrando? "));
    tamanhocatalogo++
} while (continuarcadastro);
console.log(catalogoProdutos) 