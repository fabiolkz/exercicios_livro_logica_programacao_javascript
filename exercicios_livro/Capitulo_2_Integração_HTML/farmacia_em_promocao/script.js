const exibirPromo = () => {
    let inMedicamento = document.querySelector('#inMedicamento');
    let inPreco = document.querySelector('#inPreco');
    let outProduto = document.querySelector('#outProduto');
    let outPromo = document.querySelector('#outPromo');

    let medicamento = inMedicamento.value;
    let preco = inPreco.value;

    if( preco == 0 ) {
        alert('Insira o valor do produto!');
        inPreco.focus();
        return;
    } else if ( medicamento == "" ) {
        alert('Insira o nome do produto!');
        inMedicamento.focus();
        return;
    }

    let precoPromo = Math.floor(preco * 2);
    let valorDesconto = (preco * 2) - precoPromo;

    outProduto.textContent = `Promoção de ${medicamento}`;

    if (valorDesconto == 0) {
        outPromo.textContent = `Leve 2 por apenas R$ ${precoPromo.toFixed(2)}`;
    } else {
        outPromo.innerHTML = `Leve 2 por apenas R$ ${precoPromo.toFixed(2)}, </br> e tenha um desconto de ${valorDesconto.toFixed(2)} centavos`;
    }

    console.log(precoPromo)
}

let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', exibirPromo);