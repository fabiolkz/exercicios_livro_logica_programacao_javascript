
const calculoIMC = () => {

    let inNome = document.querySelector('#inNome');
    let rdMasculino = document.querySelector('#rdMasculino');
    let rdFeminino = document.querySelector('#rdFeminino');
    let inAltura = document.querySelector('#inAltura');
    let outResposta = document.querySelector('#outResposta');

    let nome = inNome.value;
    let masculino = rdMasculino.checked;
    let feminino = rdFeminino.checked;
    let altura = Number(inAltura.value);
    

    let pesoIdealMasculino = 22 * Math.pow(altura, 2);
    let pesoIdealFeminino = 21 * Math.pow(altura, 2);

    console.log(nome);

    if(nome == "" || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo...');
        inNome.focus();
        return;
    } 

    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a altura corretamente...');
        inAltura.focus();
        return;
    }

    if (masculino) {
        outResposta.textContent = `Olá Sr ${nome}, seu peso ideal é ${pesoIdealMasculino.toFixed(3)} kg`;
    } else if (feminino) {
        outResposta.textContent = `Olá Sr(a) ${nome}, seu peso ideal é ${pesoIdealFeminino.toFixed(3)} kg`;
    }
}

let btCalc = document.querySelector('#btCalc');
btCalc.addEventListener('click', calculoIMC);

const limparCampos = () => {
    location.reload();
}

let btLimpa = document.querySelector('#btLimpa');
btLimpa.addEventListener('click', limparCampos);


/* TENTANDO FAZER UM BOTAO DE SCROLL UP */ 

const scrollUp = () => {

    if (scrollY > 0 ) {
        window.scrollTo(0,0);
    }
        
}

// let btScrollUp = document.querySelector('#btScrollUp');
// btScrollUp.addEventListener('click', scrollUp);
