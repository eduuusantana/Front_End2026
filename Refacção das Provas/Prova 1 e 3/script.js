function revelar() {
    const imagem = document.querySelector('.card-img-top');
    imagem.src = '../img/_vinicius_junior.png';

    const Nome = document.querySelector('#Nome span.placeholder');
    const Rank = document.getElementById('Rank');
    const Data_Nas = document.getElementById('Data_Nas');
    const Altura = document.getElementById('Altura');
    const Posição = document.getElementById('Posição');

    if (Nome) Nome.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    Rank.textContent = '9,5';
    Data_Nas.textContent = '12/07/2000 (25 anos)';
    Altura.textContent = '1,76 m';
    Posição.textContent = 'Ponta-esquerda / Atacante';

    const elementosComPlaceholder = document.querySelectorAll('.placeholder');
    elementosComPlaceholder.forEach(item => {
        item.classList.remove('placeholder', 'col-6', 'col-4');
        item.classList.add('card-text');
    });

    const elemGlow = document.querySelectorAll('.placeholder-glow');
    elemGlow.forEach(item => {
        item.classList.remove('placeholder-glow');
    });

    Rank.classList.remove('text-bg-secondary');
    Rank.classList.add('text-bg-primary');
}