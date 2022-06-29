let i = 0

function navLinkAnimation() {
    const navLinks = document.querySelectorAll('li')
    navLinks.forEach(function(link) {
        /*Verificando se existe a propriedade animation em cada li no html. Se já existe, deixa vazio. Se não, cria.*/
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
    })
    
}

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
    navLinkAnimation()
}
