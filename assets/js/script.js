'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





const form = document.querySelector('form');
const fullName =document.getElementById("fullname");
const PhoneNUM =document.getElementById("PhoneNUM");
const emailadresse =document.getElementById("emailadresse");
const Messagetext =document.getElementById("Messagetext");

function sendEmail(){

    const bodyMessage =`fullName: ${fullName.value}<br> PhoneNUM : ${PhoneNUM.value}<br> emailadresse : ${emailadresse.value}<br>  Messagetext: ${Messagetext.value}<br>`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hernaneembalo@gmail.com",
        Password : "D433EC40BC17C62FA6F3A6BEC8B12FC62A36",
        To : 'hernaneembalo@gmail.com',
        From : "hernaneembalo@gmail.com",
        Subject : "this is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully !",
                icon: "success"
              });
        }
    });
}





form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    sendEmail();
    checkInputs();
})



document.addEventListener('DOMContentLoaded', (event) => {
  const targetId = new URLSearchParams(window.location.search).get('scrollTo');
  if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
});