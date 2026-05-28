export default function dropDownMenu(){

    function initDropMenu(event){
        event.preventDefault()
        menuDrop.classList.toggle('drop')
    }

    const divDrop = document.querySelector('div[data-dropdown]')
    const menuDrop = document.querySelector('menu[data-drop]')
    divDrop.addEventListener('click', initDropMenu)
}