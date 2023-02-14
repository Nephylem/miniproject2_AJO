// for product view modal

let productObj = [
belly = {
        img : ["index_embed/products/belly/AJO_main.jpg", "index_embed/products/belly/AJO_open.jpg","index_embed/products/belly/AJO_close.jpg","index_embed/products/belly/AJO_chopped.jpg",
        "index_embed/products/belly/AJO_chopped_open.jpg"]
    },
]

let swiperModalWrapper = document.querySelector('.product-wrapper');
let swiperModalWrapper2 = document.querySelectorAll('.product-wrapper')[1];



for (product in productObj){    
    let img = productObj[product].img

    img.forEach((value, index)=>{
        let divElementOne = elementGenerator('div', 'class', 'swiper-slide product-slide'); 
        let imgElementOne = elementGenerator('img', 'src', value);
        let divElementTwo = elementGenerator('div', 'class', 'swiper-slide product-slide'); 
        let imgElementTwo = elementGenerator('img', 'src', value);
        
        divElementOne.appendChild(imgElementOne)
        divElementTwo.appendChild(imgElementTwo)

        swiperModalWrapper.appendChild(divElementOne)
        swiperModalWrapper2.appendChild(divElementTwo)
        
    })
}



// A function to generate element with attribute

function elementGenerator(element, attribute, value){
    let mainEl = document.createElement(element);
    let mainAttr = document.createAttribute(attribute);
    mainAttr.value = value;
    mainEl.setAttributeNode(mainAttr);

    return mainEl
}



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
