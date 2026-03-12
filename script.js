const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const overlay = document.getElementById("menuOverlay")
const closeMenu = document.getElementById("closeMenu")
const menuLinks = document.querySelectorAll("#mobileMenu a")

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("translate-x-full")
    overlay.classList.remove("opacity-0")
    overlay.classList.remove("pointer-events-none")

})
function fecharMenu(){
    mobileMenu.classList.add("translate-x-full")
    overlay.classList.add("opacity-0")
    overlay.classList.add("pointer-events-none")

}

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        fecharMenu()
    }

})

closeMenu.addEventListener("click", fecharMenu)
overlay.addEventListener("click", fecharMenu)

menuLinks.forEach(link => {
    link.addEventListener("click", fecharMenu)
})
window.addEventListener("scroll", function(){

    const navbar = document.getElementById("navbar")

    if(window.scrollY > 50){
        navbar.classList.add("shadow-lg")
    }else{
        navbar.classList.remove("shadow-lg")
    }

})

const abri = Document