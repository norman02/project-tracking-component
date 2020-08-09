/* Requirments:  
    1. Initial state should display the menu button and no menue.
    2. The menu button should change to the close button when clicked, and the menu should be displayed.
    3. When the closed button is clicked revert to initial state 
    4. If a link is slected from the menu revert to initial state.*/

// get elements
const menu = document.getElementById('menu')
const menuButton = document.getElementById('menu_button')
const icon = document.getElementById('icon')

let isOpen = false

//open the menu
const openMenue = ()=> {
    icon.src = 'images/icon-close.svg'
    menu.style.display = 'block'
    isOpen = true
}

// close the menu
const closeMenue = ()=> {
    icon.src = 'images/icon-hamburger.svg'
    menu.style.display = 'none'
    isOpen = false
}

const toggle = ()=> {
    
    
    if (!isOpen) {
        openMenue()
    }
    else {
        closeMenue()
    }
    
}

menuButton.addEventListener('click', e=> {
    e.preventDefault
    toggle()
} )


document.querySelectorAll('.menu-link').forEach(e => {
    e.addEventListener('click', e => {
        e.preventDefault()
        closeMenue()
    })
})


    





