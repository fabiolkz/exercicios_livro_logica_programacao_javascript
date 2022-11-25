let nome = prompt('Infome o nome do aluno: ');
let nota1 = Number(prompt('Infome a primeira nota do aluno: '));
let nota2 = Number(prompt('Infome a segunda nota do aluno: '));
let media = (nota1 + nota2) / 2;

alert(`A média do aluno(a) ${nome} é de ${media.toFixed(2)}`);