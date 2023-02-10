let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');



menubar.addEventListener('click', ()=>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
});