let user = [
    { "age": "21", },
    { "email": "nairagrig99@gmail.com" },
    { "phone": "+374-93-04-59-39" },
    { "address": "Shirak region Shirak village" },
    { "language": "armenian,russian" },

];


let profSkill = [
    { 'HTML': '85%' },
    { 'CSS': '80%' },
    { 'JAVASCRIPT': '70%' },
    { 'BOOTSTRAP': '80%' },
    { 'ANGULAR 2+': '50%' },
    { 'MYSQL': '60%' },
]
let sidebar = document.querySelector('.responsive_menu');
let logo = document.querySelector('.logo');
let slider = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.btn_dot');


function burger(navbar) {
    navbar.classList.toggle("change");
    sidebar.classList.toggle("change_sidebar");
    logo.classList.toggle("change_logo");

}
/*fixed navbar*/
window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    if (window.scrollY >= 450) {
        nav.classList.add('navbarFixed');
    } else {
        nav.classList.remove('navbarFixed');
    }
}, false);



let userDom = document.querySelector('.user');
let userContact = document.querySelector('.contact');

window.addEventListener('DOMContentLoaded', load(user));

function load(user) {
    let userInformation = user.map((item) => {
        return `<span><b>${Object.keys(item)}:</b>${Object.values(item)}</span>`
    })
    userInformation = userInformation.join(" ");
    userDom.innerHTML = userInformation;


    getProf(profSkill);
    workPortfolio(0);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            workPortfolio(i);

        })
    })
}



function getProf(skills) {
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");


    skills.map((item, i) => {
        if (i % 2 == 0) {
            one.innerHTML += `<div class="d-flex justify-content-between">
                                <p>${Object.keys(item)}</p>
                                <p>${Object.values(item)}</p>
                            </div>
                            <div class="separator">
                                <p style="width:${Object.values(item)}"></p>
                            </div>`
        } else {
            two.innerHTML += `<div class="d-flex justify-content-between">
                <p>${Object.keys(item)}</p>
                <p>${Object.values(item)}</p>
            </div>
            <div class="separator">
                <p style="width:${Object.values(item)}"></p>
            </div>`
        }

    })
}

let site = document.querySelectorAll(".icon .fa");
let f = document.querySelectorAll(".follow");
let site_arr = ['follow me facebook', 'follow me twitter', 'follow me google', 'follow me instagram'];
for (let i = 0; i < site_arr.length; i++) {
    site[i].onmouseover = () => {
        f[i].style.display = "block";
        f[i].innerHTML = site_arr[i];
    }
    site[i].onmouseout = () => {
        f[i].style.display = "none";
    }
}

function workPortfolio(currentSlide) {
    slider.forEach((slide, index) => {
        slide.style.display = "none"
        dots.forEach((dot, index) => {
            dot.classList.remove("active")
        })
    })
    slider[currentSlide].style.display = "block"
    dots[currentSlide].classList.add("active")

}
AOS.init({
    duration: 1300
})