let listaDeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto. Ajude o Zé a achar o número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou');
        //Foi preciso criar uma variável para mensagemTentativas pq o html espera
        //como parâmetro em "exibirTexto" apenas Strings e a variável ${tentativas}
        //é uma template String, que o JS entende
        let tentativaSingular = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${tentativaSingular}`);
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior')
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let qtdElementosLista = listaDeNumerosSorteados.length;

    if(qtdElementosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); //recursssão
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}