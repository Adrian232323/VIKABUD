const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const openNav = document.querySelector('.burger-btn-box')
const closeNav = document.querySelector('.fa-xmarkl')
const closeBoxNav = document.querySelector('.close-box')
const closeX = document.querySelector('.hide-navigation')
const navDesktop = document.querySelector('.nav-desktop')
const footerYear = document.querySelector('.footer-year')

const handleNAv = () => {
    nav.classList.toggle('nav-active')
    openNav.classList.toggle('hide-nav')
    closeNav.classList.toggle('hide-navigation')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        closeX.classList.add('hide-navigation') 
        )
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active')
        )
        item.addEventListener('click', () =>
        openNav.classList.remove('hide-nav')
        )
    })
    handleNavItemsAnimation();
}
const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}

const addShadow = () => {
    if (window.scrollY >= 100) {
        navDesktop.classList.add('shadow-bg')
    } else {
        navDesktop.classList.remove('shadow-bg')
    }
}




const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".slider-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
}
imageList.addEventListener("scroll", () => {
    handleSlideButtons();
});
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();

window.addEventListener('scroll', addShadow)
navBTN.addEventListener('click', handleNAv)
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);