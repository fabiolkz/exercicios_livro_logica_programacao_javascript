let preco = Number(prompt('Informe o valor do produto: '));
let precoVista = preco - (preco * 0.1);
let precoParcelado = preco / 3;

alert(`À vista: R$ ${precoVista.toFixed(2)} \n ou 3 x de R$ ${precoParcelado.toFixed(2)}`)