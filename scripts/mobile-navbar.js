function activeMobileMenu() {
    const navbar = document.querySelector('ul')
    const imgNavbar = document.getElementById('mobile-menu-open')
    navbar.classList.toggle('active')
    imgNavbar.src = 'img/menu-buguer-close.svg'
}