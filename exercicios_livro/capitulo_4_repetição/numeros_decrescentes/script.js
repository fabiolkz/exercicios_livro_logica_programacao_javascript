const decrescerNumero = () => {
    let inNumber = document.querySelector('#inNumber');
    let outResposta = document.querySelector('#outResposta');

    let numero = Number(inNumber.value);

    let numerosDecrescidos = " ";
    let ultimoNumero = "1."

    if(numero == 0 || isNaN(numero)) {
        alert('Por favor coloque um número valido!');
        inNumber.focus();
        inNumber.value = " ";
        return;
    }

    for(i = numero; i >= 2; i--) {
        numerosDecrescidos += i + ", ";
        outResposta.textContent = `Entre os numeros ${numero} e 1, temos os seguintes números: ${numerosDecrescidos}${ultimoNumero}`;
    }
}

let button = document.querySelector('#btDecrescer');
button.addEventListener('click', decrescerNumero);