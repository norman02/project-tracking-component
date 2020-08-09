/* Requirments:  
    1. Initial state should display the menu button and no menue.
    2. The menu button should change to the close button when clicked, and the menu should be displayed.
    3. When the closed button is clicked revert to initial state 
    4. If a link is slected from the menu revert to initial state.*/

// get elements
const menu = document.getElementById('menu')
const menuButton = document.getElementById('menu_button')
const links = document.getElementsByClassName('menu_link')

let isOpen = false

//open the menu
const openMenue = ()=> {
    menu.style.display = 'block'
}

// close the menu
const closeMenue = ()=> {
    menu.style.display = 'none'
}

const toggle = ()=> {
    
    
    if (!isOpen) {
        openMenue()
        isOpen = true
    }
    else {
        closeMenue()
        isOpen = false
    }
    
}

menuButton.addEventListener('click', e=> {
    e.preventDefault
    toggle()
} )

// FIXME: 
document.getElementById('test').addEventListener('click', closeMenue)




