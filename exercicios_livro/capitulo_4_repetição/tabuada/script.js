
const exibirTabuada = () => {
    let inNumber = document.querySelector('#inNumber');
    let outResposta = document.querySelector('#outResposta');

    let numero = Number(inNumber.value);

    tabuada = "";

    if(numero == 0 || isNaN(numero)) {
        alert('Por favor coloque um número valido!');
        inNumber.focus();
        inNumber.value = " ";
        return;
    }

    for(i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "</br>";
        outResposta.innerHTML = tabuada;
    }

}

let button = document.querySelector('#btExibir');
button.addEventListener('click', exibirTabuada);