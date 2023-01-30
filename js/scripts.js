function mostrar_menu(){
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.img_mobile').src="./imagens/menu_1.png";
    }
}
