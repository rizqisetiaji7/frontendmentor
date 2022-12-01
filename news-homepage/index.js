const navMenu = document.getElementById('navbar-menu')
const btnMenu = document.getElementById('menu')
const btnMenuClose = document.getElementById('menu-close')

btnMenu.onclick = () => {
	navMenu.classList.add('open')
}

btnMenuClose.onclick = () => {
	navMenu.classList.remove('open')
}

window.addEventListener('resize', () => {
	if (window.innerWidth > 768) {
		navMenu.classList.remove('open')
	}
})