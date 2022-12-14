const verificarVelocidade = () => {
    let inVelocidadePermitida  = document.querySelector('#inVelocidadePermitida');
    let inVelocidadeCondutor = document.querySelector('#inVelocidadeCondutor');
    let outResposta = document.querySelector('#outResposta');

    let velocidadePermitida = Number(inVelocidadePermitida.value);
    let velocidadeCondutor = Number(inVelocidadeCondutor.value);

    if (velocidadePermitida == 0 || isNaN(velocidadePermitida)) {
        alert('Por favor preencha corretamente a velocidade permitida!');
        inVelocidadePermitida.focus();
        return;
    } else if (velocidadeCondutor == 0 || isNaN(velocidadeCondutor)) {
        alert ('Por favor preencha corretamente a velocidade do condutor!');
        inVelocidadeCondutor.focus();
        return;
    }


    let velocidadeExcedida = (velocidadeCondutor - velocidadePermitida);



    if (velocidadeCondutor <= velocidadePermitida) {
        outResposta.textContent = 'Sem Multa';
    } else if (velocidadeCondutor <= (velocidadePermitida + (velocidadePermitida * 0.2))) {
        outResposta.textContent = `Multa Leve pois voce excedeu ${velocidadeExcedida} km/h`;
    } else {
        outResposta.textContent = `Multa Grave pois voce excedeu ${velocidadeExcedida} km/h`;
    }

}

let btVerifica = document.querySelector('#btVerifica');
btVerifica.addEventListener('click', verificarVelocidade);

