function add() {
    const containerCards = document.getElementById('Cards');

    containerCards.style.display = 'flex';
    containerCards.style.flexDirection = 'row';
    containerCards.style.gap = '20px';
    containerCards.style.flexWrap = 'wrap';

    const novoJogadorHTML = `
        <div class="card" style="width: 22rem;">
            <img src="../img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">

            <div class="card-body">
                <h5 class="card-title">
                    Lucas Tolentino Coelho de Lima
                    <span class="badge text-bg-secondary">8,8</span>
                </h5>
                <p class="card-text">
                    <strong>Nascimento:</strong> 27/08/1997 (28 anos) <br>
                    <strong>Altura:</strong> 1,80 m <br>
                    <strong>Posição:</strong> Meio-campista
                </p>
            </div>
        </div>
    `;
    containerCards.insertAdjacentHTML('beforeend', novoJogadorHTML);
}