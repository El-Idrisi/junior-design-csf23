
const hambuger = document.querySelector("#hamburger")
const navMenu = document.querySelector(".nav-menu")

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("hamburger-active")
    navMenu.classList.toggle("translate-x-full")
})