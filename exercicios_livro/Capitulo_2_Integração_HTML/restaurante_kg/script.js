
const calcPrice = () => {
    let inPrice = document.querySelector('#inPrice');
    let inConsumo = document.querySelector('#inConsumo');
    let outPrice = document.querySelector('#outPrice');

    let price = inPrice.value;
    let consumo = inConsumo.value;

    if( price == 0 ) {
        alert('Insira o valor do KG!');
        inPrice.focus();
        return;
    } else if ( consumo == 0 ) {
        alert('Insira a quantidade consumida pelo cliente!');
        inConsumo.focus();
        return;
    }

    let priceToPay = price * (consumo / 1000);

    outPrice.textContent = `O valor a ser pago é de R$ ${priceToPay.toFixed(2)}`;

}

let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', calcPrice);