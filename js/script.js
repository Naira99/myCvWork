let user = [];
let profSkill = [];
let education = [];
fetch('https://run.mocky.io/v3/62e490d9-c628-48cc-94cf-4df6495e15e0').then(function(response) {
    response.json().then(function(data) {
        for (let key of data) {
            user.push(key.about);
            profSkill.push(key.skills);
            education.push(key.education);
        }
        load(user)
        getProf(profSkill);
        getEducation(education);
    })
})
let sidebar = document.querySelector('.responsive_menu');
let logo = document.querySelector('.logo');
let slider = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.btn_dot');
let educationOne = document.querySelector(".educationOne");
let educationTwo = document.querySelector(".educationTwo");

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

/**icon hover */
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


let userDom = document.querySelector('.user');
let userContact = document.querySelector('.contact');
let aboutMe = document.querySelector(".about-me");
let myName = document.querySelectorAll(".my-name");
let contactAboutUs = document.querySelector(".contact");

function load(user) {
    let about = " ";
    let userInformation = user.map((item, i) => {
        myName.forEach((items) => {
            items.innerText = item.name
        })
        for (let key in item) {
            if (key == "aboutMe") {
                aboutMe.innerHTML = item[key];
            } else {
                about += `<span><b>${key}:</b>${item[key]}</span>`
                if (key == 'address' || key == 'email' || key == 'phone') {
                    contactAboutUs.innerHTML += `
                 <div>
                    <b>${key}:</b>
                    <p>${item[key]}</p>
                </div>`
                }
            }
        }
        return about;
    })
    userInformation = userInformation.join(" ");
    userDom.innerHTML = userInformation;
    workPortfolio(0);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            workPortfolio(i);
        })
    })
}

/**professional skills */
function getProf(skills) {
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    skills.map((item) => {
        let i = 2;
        for (let key in item) {
            if (i % 2 == 0) {
                one.innerHTML += `<div class="d-flex justify-content-between">
    <p>${key}</p>
    <p>${item[key]}%</p>
</div>
<div class="separator">
    <p style="width:${Number(item[key])}%"></p>
</div>`
            } else {
                two.innerHTML += `   <div class="d-flex justify-content-between">
    <p>${key}</p>
    <p>${item[key]}%</p>
</div>
<div class="separator">
    <p style="width:${Number(item[key])}%"></p>
</div>`
            }
            i++;
        }
    })
}

/*Portfolio*/
function workPortfolio(currentSlide) {
    slider.forEach((slide) => {
        slide.style.display = "none"
        dots.forEach((dot) => {
            dot.classList.remove("active")
        })
    })
    slider[currentSlide].style.display = "block"
    dots[currentSlide].classList.add("active")
}


/*Education*/
function getEducation(n) {
    for (let key of n) {
        educationOne.innerHTML = key.schoolOne
        educationTwo.innerHTML = key.schoolTwo
    }
}

/*form validation*/
let form = document.querySelector('form');
let inputValidity = document.querySelectorAll('#in');
let error = document.querySelector('.err');
let bool = false;
inputValidity.forEach((item) => {
    item.addEventListener("input", function(event) {
        item.value == null || item.value == "" ? bool = false : bool = true;
    }, false)

})



/*contact me */

let change_value = document.querySelector('.change-value');
let sucess_message = document.querySelector(".success-message");
document.querySelector(".email_to").innerHTML = "nar.grig.1999@mail.ru";
window.onload = function() {
    let form = document.querySelector(".contact-form");
    form.addEventListener('submit', function(event) {
        if (bool) {
            change_value.value = "Processing...";
            change_value.disabled = true;
            const templateId = "template_so35sqi";
            const serviceId = "service_z2hmhil";
            event.preventDefault();
            emailjs.sendForm(serviceId, templateId, this).then(function(response) {

                sucess_message.style.display = "block";
                form.style.display = "none";
            }, function(error) {
                alert('FAILED...', error);
            });
        } else {
            return
        }
    })
}

AOS.init({
    duration: 1300
})