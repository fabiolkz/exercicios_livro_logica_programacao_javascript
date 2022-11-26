const convert = () => { 
    let inName = document.querySelector('#inName');
    let inDuration = document.querySelector('#inDuration');
    let outTitle = document.querySelector('#outTitle');
    let outConvert = document.querySelector('#outConvert');

    let name = inName.value;
    let duration = inDuration.value;

    if( name == "" ) {
        alert('Insira o nome do Filme!');
        inName.focus();
        return;
    } else if ( duration == 0 ) {
        alert('Insira um valor de duração!');
        inDuration.focus();
        return;
    }
    

    let hour = Math.floor(duration / 60);
    let minutes = duration % 60;
    
    outTitle.textContent = name;
    outConvert.textContent = `O Filme tem ${hour} hora(s) e ${minutes} minuto(s)`
}

let btConvert = document.querySelector('#btConvert');
btConvert.addEventListener('click', convert);