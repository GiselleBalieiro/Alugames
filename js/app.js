function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botão = gameClicado.querySelector('.dashboard__item__button');

if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove ('dashboard__item__img--rented');
    botão.classList.remove ('dashboard__item__button--return');
    botão.textContent = 'Alugar';
}

else { 
    imagem.classList.add ('dashboard__item__img--rented');
    botão.classList.add ('dashboard__item__button--return');
    botão.textContent = 'Devolver';
}
}
