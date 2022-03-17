const botaoMenu = document.querySelector('.cabecalho__menu') /*mapeia o botão do menu do cabeçalho*/
const menu = document.querySelector('.menu-lateral') /* mapeia o menu lateral*/

botaoMenu.addEventListener('click',() => {        /*quando clicar no botão menu será ativa do menu lateral*/
    menu.classList.toggle('menu-lateral--ativo')
})