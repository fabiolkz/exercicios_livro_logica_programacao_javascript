const verificaChichilas = () => {
    let inChinchilas = document.querySelector('#inChinchilas');
    let inAnos = document.querySelector('#inAnos');
    let outResposta = document.querySelector('#outResposta');

    let chichilas = inChinchilas.value;
    let anos = Number(inAnos.value);

    let totalChichilas = chichilas * 3;

    for (i = 0; i < anos; i++) {

    }

    outResposta.textContent = totalChichilas;
}

let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', verificaChichilas);