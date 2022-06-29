let i = 0

function activeMobileMenu() {
    const navbar = document.querySelector('ul')
    const imgNavbar = document.getElementById('mobile-menu-open')
    navbar.classList.toggle('active')
    i++
    if (i % 2 == 0) {
        imgNavbar.src = 'img/menu-buguer-open.svg'
    } else {
        imgNavbar.src = 'img/menu-buguer-close.svg'
    }
}
