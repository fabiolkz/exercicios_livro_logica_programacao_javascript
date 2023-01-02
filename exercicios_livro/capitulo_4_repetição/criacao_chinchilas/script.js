const verificaChichilas = () => {
    let inChinchilas = document.querySelector('#inChinchilas');
    let inAnos = document.querySelector('#inAnos');
    let outResposta = document.querySelector('#outResposta');

    let chichilas = inChinchilas.value;
    let anos = Number(inAnos.value);

    let procriacaoChinchilas = `1º Ano: ${chichilas} Chinchilas` + `</br>`


    if (chichilas < 2 || (chichilas % 2) != 0) {
        alert('Por favor insira um número maior que 2 para conseguirmos fazer a procriação!');
        inChinchilas.focus();
        inChinchilas.value = " ";
        inAnos.value = " ";
        return;
    } else if (anos <= 1 || isNaN(anos)) {
        alert('Insira pelo menos 2 anos para obter o tempo minimo de procriação das espécies!');
        inAnos.focus();
        inAnos.value = " ";
        return;
    }

    for (i = 2; i <= anos; i++) {
        chichilas = chichilas * 3;
        procriacaoChinchilas += `${i}º Ano: ${chichilas} Chinchilas` + `</br>`
        outResposta.innerHTML = procriacaoChinchilas;
    }
}


let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', verificaChichilas);