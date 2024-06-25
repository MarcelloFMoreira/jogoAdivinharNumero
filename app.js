alert("hello word");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute = prompt(`escolha um numero de 1 a ${numeroMaximo}`);
let tentativa = 1;

while (chute != numeroSecreto) {
    if (numeroSecreto > chute) {
        alert("tente um numero mais alto");
    } else {
        alert("tente um numero mais baixo");
    }
    chute = prompt(`escolha um numero de 1 a ${numeroMaximo}`);
    tentativa++;
}


let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o numero ${numeroSecreto} e utilizou ${tentativa} ${palavraTentativa}`);