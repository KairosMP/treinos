function ler_todas_mensagens(params) {
    
    let elementos = document.querySelectorAll('.unRead');

    Array.from(elementos).forEach((elemento) => {
        elemento.classList.remove('unRead');
    });

    let icones = document.querySelectorAll('i')

    Array.from(icones).forEach((icones) => {
        icones.style.display = 'none'
    })

    let notificacao = document.querySelector("output")

    let msg_nao_lidas = Array.from(elementos).length - Array.from(elementos).length

    notificacao.innerHTML = msg_nao_lidas
}