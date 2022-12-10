
const verificar = () => {
    let inNumber = document.querySelector('#inNumber');
    let outResposta = document.querySelector('#outResposta');

    let number = Number(inNumber.value);

    if (number == "" || isNaN(number)) {
        alert('Por favor insira um número!');
        inNumber.focus();
        return;
    }

    if (number % 2 == 0) {
        outResposta.textContent = `O numero ${number} é par!`;
    } else {
        outResposta.textContent = `O numero ${number} é ímpar!`;
    }
}

let btVerifica = document.querySelector('#btVerifica');
btVerifica.addEventListener('click', verificar);