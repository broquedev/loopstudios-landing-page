
function menuMobileToggle() {
    const menuItens = document.querySelector('.menu__itens');

    window.addEventListener('click', (e) => {
        let el = e.target;
        if(el.classList.contains('menu__mobile')) menuItens.classList.toggle('active')        
        if(el.classList.contains('btn__close')) menuItens.classList.toggle('active')        
    })
}


menuMobileToggle();

