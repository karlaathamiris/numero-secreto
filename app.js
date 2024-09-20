alert("Esse é o Jogo do Número Secreto, bem vinde!!!");
let numeroSecreto = 29;
let chute = prompt("Escolha um número entre 1 e 30");

if (numeroSecreto == chute) {
    alert (`ACERTOU! Realmente é ${numeroSecreto}`);

} else {
    alert ("EROOOOOOOOOOOOOU");
    console.log(`O número secreto é: " + ${numeroSecreto} + 🤫`);

}