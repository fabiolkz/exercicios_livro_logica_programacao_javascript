
const promoRevenda = () => {
    let inVeiculo = document.querySelector('#inVeiculo');
    let inPrice = document.querySelector('#inPrice');
    let outVeiculo = document.querySelector('#outVeiculo');
    let outPrice = document.querySelector('#outPrice');

    let veiculo = inVeiculo.value;
    let price = inPrice.value;

    let entrada = price / 2;
    let parcelas = entrada / 12;

    outVeiculo.textContent = `Promoção: ${veiculo}`;
    outPrice.textContent = `Entrada de R$ ${entrada.toFixed(2)} \n + 12x de R$ ${parcelas.toFixed(2)} sem juros!`
}

let btPromo = document.querySelector('#btPromo');
btPromo.addEventListener('click', promoRevenda);