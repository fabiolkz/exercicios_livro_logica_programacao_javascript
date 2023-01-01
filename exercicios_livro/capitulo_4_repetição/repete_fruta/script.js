


const repetirFruta = () => {
    let inFruta = document.querySelector('#inFruta');
    let inNumber = document.querySelector('#inNumber');
    let outFruta = document.querySelector('#outFruta');


    let fruta = inFruta.value;
    let number = Number(inNumber.value);

    let frutaRepetida = '';
    let ultimaFruta = '';

    if(fruta == '' || number == 0 || isNaN(number)){
        alert('Preencha os campos corretamente ...');
        inFruta.focus();
        inFruta.value = '';
        inNumber.value = '';
        outFruta.textContent = '';
        return;
    }

    for (i = 1; i < number; i++) {
        frutaRepetida += `${fruta} * `;
    }

    ultimaFruta = `${fruta}`;

    outFruta.textContent = `${frutaRepetida}${ultimaFruta}`
}

let button = document.querySelector('#btRepetir');
button.addEventListener('click', repetirFruta)