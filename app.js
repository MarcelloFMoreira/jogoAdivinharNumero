alert("hello word");

let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("escolha um numero de 1 a 10");
let tentativa = 1;

while (chute != numeroSecreto) {
    // if (chute == numeroSecreto) {
    //     break
    // }
    if (numeroSecreto > chute) {
        alert("tente um numero mais alto");
    } else {
        alert("tente um numero mais baixo");
    }
    chute = prompt("escolha um numero de 1 a 10");
    tentativa++;
}


if (tentativa > 1) { alert(`Você acertou o numero ${numeroSecreto} e utilizou ${tentativa} tentativas`); }
else { alert(`Você acertou o numero ${numeroSecreto} e utilizou ${tentativa} tentativa`); }


