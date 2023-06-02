// Exibir um alert no browser 'Vamos Jogar'
alert("Vamos Joga!");
// Pedir para jogador1 digitar o nome
let nome1 = prompt("Nome do jodador 1:");
// Pedir para jogador1 digitar um numero
let numero1 = parseInt(prompt("Escola um numero:"));
// Pedir para jogador2 digitar o nome
let nome2 = prompt("Nome do jodador 2:");
// Pedir para jogador2 digitar um numero
let numero2 = parseInt(prompt("Escola um numero:"));
// sortear(radomico) um numero entre 0 e 1
let sorteio = parseInt(Math.random()*2);
// Se os números forem iguais, mostrar mensagem "empate" e informar que haverá um sorteio(radomico) para definir o ganhador( 0 ganha jogador1 e 1 ganha jogador2) e mostre um alert com numero sorteado e nome do ganhador
if (numero1 == numero2) 
{
    alert("Houve um empate, vamos fazer um sorteio");
    if (sorteio == 0) 
    {
        //exibir um alert com numero sorteado e nome do ganhador e numero que ele escolheu
        alert(" O vencedor foi "+nome1+", é o numero sorteado foi "+sorteio);
    }
    else
    {
        //exibir um alert com numero sorteado e nome do ganhador e numero que ele escolheu
        alert(" O vencedor foi "+nome2+", é o numero sorteado foi "+sorteio);
    }
}
else{
    // se o numero sorteado for 0, ganha quem escolheu o menor numero
    // se o numero sorteado for 1, ganha quem escolheu o maior numero
    if(numero1 < numero2 && sorteio == 0 || numero2 < numero1 && sorteio == 1)
    {
        //exibir um alert com numero sorteado e nome do ganhador e numero que ele escolheu
        alert(" O vencedor foi "+nome1+", é o numero sorteado foi "+sorteio); 
    }
    else
    {
        //exibir um alert com numero sorteado e nome do ganhador e numero que ele escolheu
        alert(" O vencedor foi "+nome2+", é o numero sorteado foi "+sorteio);
    }
}

