alert("Esse é o Jogo do Número Secreto, bem vinde!!!");
let numeroSecreto = 29;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30: ")
    
    if (chute == numeroSecreto) {
        alert (`ACERTOU! Realmente é ${numeroSecreto}. Você precisou de ${tentativas} tentativas`);
    } else {
        if(chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);
        }else{
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    tentativas++;
}