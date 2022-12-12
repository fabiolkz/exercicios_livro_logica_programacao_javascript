const parquimetro = () => {
    let inValor = document.querySelector('#inValor');
    let outTime = document.querySelector('#outTime');
    let outTroco = document.querySelector('#outTroco');

    let valor = Number(inValor.value);

    let troco  = 0; 



    if (valor < 1 || isNaN(valor) || valor == "") {
        alert('Valor insuficiente!');
        location.reload();
        return;
    } else if (valor >= 1 && valor < 1.75) {
        outTime.textContent = 'Tempo: 30 min';
        if (valor > 1) {
            troco = (valor - 1);
            outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
        }
    } else if (valor >= 1.75 && valor < 3) {
        outTime.textContent = 'Tempo: 60 min'; 
        if (valor > 1.75) {
            troco = (valor - 1.75);
            outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
        };
    } else if (valor >= 3) {
        outTime.textContent = 'Tempo 120 min';
        if (valor > 3) {
            troco = (valor - 3);
            outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
        };
    }

    if (troco == 0) {
        outTroco.textContent = "";
    }

    console.log(valor,troco)
}

let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', parquimetro);
