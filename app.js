alert("hello word");

let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("escolha um numero de 1 a 10");
let tentativas = 1;

while (chute != numeroSecreto) {
    if (numeroSecreto > chute) {
        alert("tente um numero mais alto");
        chute = prompt("escolha um numero de 1 a 10");
        tentativa ++;
    }else {
        alert("tente um numero mais baixo");
        chute = prompt("escolha um numero de 1 a 10");
        tentativa ++;
    }

}
if (chute == numeroSecreto) {
    alert(`Você acertou o numero ${numeroSecreto}`);
    alert(`Você utilizou ${tentativas} tentativas`);
}

