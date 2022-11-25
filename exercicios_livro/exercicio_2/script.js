let valorConta = Number(prompt('Insira o valor da conta: '));
let qntClientes = Number(prompt('Insira quantos clientes irão pagar: '));
let valorCliente = valorConta / qntClientes;

alert(`Valor por cliente: R$ ${valorCliente.toFixed(2)}`);