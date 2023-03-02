const freq = document.querySelectorAll(".frequent-card");
const loginBtn = document.querySelector(".login");
const loginPage = document.querySelector(".login-page");
const loginCloseBtn = document.querySelector("#login-close-btn");
const signupBtn = document.querySelector(".signup");
const signupPage = document.querySelector(".signup-page");
const signupCloseBtn = document.querySelector("#signup-close-btn");
const cookiePage = document.querySelector(".cookies");
const cookieAcceptBtn = document.querySelector("#cookie-accept-btn");
const cookieDeclineBtn = document.querySelector("#cookie-decline-btn");
const navbarHamburgerBtnOpen = document.querySelector("#navbar-hamburger-btn-open");
const navbarHamburgerBtnClose = document.querySelector("#navbar-hamburger-btn-close");
const navbarİtems = document.querySelector(".navbar-items");

setInterval(() => {
    let cookieAccepted = localStorage.getItem("Cookies");
    if (cookieAccepted != "Accepted") {
        cookiePage.classList.add("cookie-active");
    }
}, 2000)

cookieDeclineBtn.addEventListener("click", () => {
    cookiePage.classList.remove("cookie-active");
})

cookieAcceptBtn.addEventListener("click", () => {
    cookiePage.classList.remove("cookie-active");
    localStorage.setItem("Cookies", "Accepted");
})

navbarHamburgerBtnOpen.addEventListener("click", () => {
    navbarİtems.classList.add("navbar-active");
    navbarHamburgerBtnClose.style.display = "flex";
    navbarHamburgerBtnOpen.style.display = "none";
})

navbarHamburgerBtnClose.addEventListener("click", () => {
    navbarİtems.classList.remove("navbar-active");
    navbarHamburgerBtnOpen.style.display = "flex";
    navbarHamburgerBtnClose.style.display = "none";
})

loginBtn.addEventListener("click", () => {
    loginPage.classList.add("login-active");
})

loginCloseBtn.addEventListener("click", () => {
    loginPage.classList.remove("login-active");
})

signupBtn.addEventListener("click", () => {
    signupPage.classList.add("signup-active");
})

signupCloseBtn.addEventListener("click", () => {
    signupPage.classList.remove("signup-active");
})

freq.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");

        const icon = item.querySelector(".frequent-icon i")
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        }
        else {
            icon.className = "fa-solid fa-plus"
        }
    })
})

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("navbar-scroll", window.scrollY > 0);
    document.querySelector(".login").classList.toggle("account-btn", window.scrollY > 0);
    document.querySelector(".signup").classList.toggle("account-btn", window.scrollY > 0);
    document.querySelector(".return-page").classList.toggle("return-page-active", window.scrollY > 50);
})

