const navBarEmail = document.querySelector(".navbar-email")
const desktopMenu= document.querySelector(".desktop-menu")

navBarEmail.addEventListener("click",togleMenu)

function togleMenu() {
    desktopMenu.classList.toggle("inactive")
}