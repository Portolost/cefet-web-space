// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

function expandir(e) {
    let botClicado = e.currentTarget;
    let divEl = botClicado.parentNode;
    let clicou = divEl.classList.toggle('expandido');

    if (clicou === true)
        botClicado.innerHTML = "-";
    else
        botClicado.innerHTML = "+";
}

document.querySelectorAll('.botao-expandir-retrair').forEach(botEl => {
    botEl.addEventListener('click', expandir);
});