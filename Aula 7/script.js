// Selecionando os elementos corretamente
const imagemNormal = document.getElementById("cria_normal");
const imagemMorto = document.getElementById("cria_morto");
const botaoAlimentar = document.getElementById("btn-alimentar");

// Configurações
let tempo = 0;
let intervalo = null;

// Função principal
function iniciarJogo() {
    tempo = 0;
    trocarEstadoParaNormal();

    // Evita vários intervalos ao mesmo tempo
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        tempo++;
        console.log("Tempo:", tempo);

        if (tempo >= 30) {
            console.log("O bicho morreu!");
            trocarEstadoParaMorto();
            clearInterval(intervalo);
        }
    }, 1000);
}

// Troca para vivo
function trocarEstadoParaNormal() {
    imagemNormal.style.opacity = "1";
    imagemMorto.style.opacity = "0";
}

// Troca para morto
function trocarEstadoParaMorto() {
    imagemNormal.style.opacity = "0";
    imagemMorto.style.opacity = "1";
}

// Botão alimentar
botaoAlimentar.addEventListener("click", () => {
    console.log("Alimentado!");

    // Reinicia o jogo completamente
    iniciarJogo();
});

// Inicia automaticamente
iniciarJogo();