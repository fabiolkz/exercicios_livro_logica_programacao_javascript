const ladosTriangulo = () => {
    let inLadoA = document.querySelector('#inLadoA');
    let inLadoB = document.querySelector('#inLadoB');
    let inLadoC = document.querySelector('#inLadoC');
    let imagem = document.querySelector('img');
    let outResposta = document.querySelector('#outResposta');
    let outTriangulo = document.querySelector('#outTriangulo');
    const btVerifica = document.querySelector('#btVerifica');


    let ladoA = Number(inLadoA.value); 
    let ladoB = Number(inLadoB.value); 
    let ladoC = Number(inLadoC.value);



    if (ladoA == "" || ladoB == "" || ladoC == ""  || isNaN(ladoA, ladoB, ladoC)) {
        alert('Por favor informe TODOS os campos corretamente!');
        limparCampos();
        inLadoA.focus();
        return;
    } else if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
        outResposta.textContent = 'Os lados informados não podem formar um Triângulo!';
        outTriangulo.textContent = "";
        limparCampos();
        inLadoA.focus();
        return;
    } 


    if ((ladoA == ladoB) && (ladoB == ladoC)) {
        outResposta.textContent = 'Podemos formar um triângulo:'
        outTriangulo.textContent = 'Equilatero';
    } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
        outResposta.textContent = 'Podemos formar um triângulo:'
        outTriangulo.textContent = 'Isóceles';
    } else {
        outResposta.textContent = 'Podemos formar um triângulo:'
        outTriangulo.textContent = 'Escaleno';
    }
    
}

btVerifica.addEventListener('click', ladosTriangulo);

const limparCampos = () => {
    let inLadoA = document.querySelector('#inLadoA');
    let inLadoB = document.querySelector('#inLadoB');
    let inLadoC = document.querySelector('#inLadoC');

    inLadoA.value = "";
    inLadoB.value = "";
    inLadoC.value = "";
}