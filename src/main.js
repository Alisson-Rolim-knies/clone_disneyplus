document.addEventListener('DOMContentLoaded', function() {
    // Pegando todos os botões que têm o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');



    // Iterando sobre todos os botões e adicionando o evento de clique
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');

        })
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');

    }
}


function escondeTodasAbas() {
    // Seleciona todos os elementos com o atributo 'data-tab-id'
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    // Itera sobre os elementos e remove a classe 'shows__list--is-active'
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

