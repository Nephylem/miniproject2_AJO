// for product view modal

let viewProduct = document.querySelectorAll('.fa-eye');
let productModal = document.querySelector('.modal-overlay');
let productCloseBtn = document.querySelector('.fa-times')
viewProduct.forEach((value, index)=>{
    value.addEventListener('click', ()=>{
        productModal.classList.add('active')
    })
})

productCloseBtn.addEventListener('click', ()=>{
    productModal.classList.remove('active')
})

var swiper = new Swiper(".product-swiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-swiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// for navbar
let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
 
menubar.addEventListener('click', ()=>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

// for home carousel
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

// for reviews carousel
var swiper = new Swiper(".reviews-swiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
});

// for second reviews carousel
var swiper = new Swiper(".reviews-swiper-two", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
});
