alert("hello word");

let numeroSecreto = parseInt(Math.random() * 10 + 1);
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


let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o numero ${numeroSecreto} e utilizou ${tentativa} ${palavraTentativa}`);