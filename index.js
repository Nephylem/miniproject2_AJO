// for product view modal


let productObj = {
    belly_img : ["index_embed/products/belly/AJO_main.jpg", "index_embed/products/belly/AJO_open.jpg","index_embed/products/belly/AJO_close.jpg","index_embed/products/belly/AJO_chopped.jpg",
    "index_embed/products/belly/AJO_chopped_open.jpg"],
    belly_text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam cum iste nobis, id ut, nesciunt nulla, in quod debitis exercitationem dignissimos asperiores perferendis? Quaerat alias voluptatum nostrum voluptas dolorum?",
    chili_garlic_img : ["index_embed/products/chili_garlic/chili_garlic.jpg","index_embed/products/chili_garlic/chili_garlic2.jpg","index_embed/products/chili_garlic/chili_garlic3.jpg","index_embed/products/chili_garlic/chili_garlic4.jpg"],
    chili_garlic_text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam cum iste nobis, id ut, nesciunt nulla, in quod debitis exercitationem dignissimos asperiores perferendis? Quaerat alias voluptatum nostrum voluptas dolorum?",
    cochinillio_img : ["index_embed/products/cochinillo/cochinillio.jpg", "index_embed/products/cochinillo/cochinillio2.jpg", "index_embed/products/cochinillo/cochinillio3.jpg", "index_embed/products/cochinillo/cochinillio4.jpg"],
    cochinillio_text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam cum iste nobis, id ut, nesciunt nulla, in quod debitis exercitationem dignissimos asperiores perferendis? Quaerat alias voluptatum nostrum voluptas dolorum?",
    sisig_img : ["index_embed/products/sisig/AJO_sisig.jpg", "index_embed/products/sisig/AJO_sisig2.jpg", "index_embed/products/sisig/AJO_sisig3.jpg", "index_embed/products/sisig/AJO_sisig4.jpg"],
    sisig_text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam cum iste nobis, id ut, nesciunt nulla, in quod debitis exercitationem dignissimos asperiores perferendis? Quaerat alias voluptatum nostrum voluptas dolorum?", 
    vinegar_img : ["index_embed/products/vinegar/vinegar1.jpg", "index_embed/products/vinegar/vinegar2.jpg"],
    vinegar_text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam cum iste nobis, id ut, nesciunt nulla, in quod debitis exercitationem dignissimos asperiores perferendis? Quaerat alias voluptatum nostrum voluptas dolorum?",
}

modalInfoGallery(productObj.belly_img, productObj.belly_text, 0)
modalInfoGallery(productObj.chili_garlic_img,productObj.chili_garlic_text, 1)
modalInfoGallery(productObj.cochinillio_img, productObj.cochinillio_text, 2)
modalInfoGallery(productObj.sisig_img, productObj.sisig_text, 3)
modalInfoGallery(productObj.vinegar_img, productObj.vinegar_text, 4)



// a function to add content in the modal product view
function modalInfoGallery(objImg, objText, productIndex){
    let productInfoText = document.querySelector('.product-info p')
    let swiperModalWrapper = document.querySelectorAll('.product-wrapper')[0];
    let swiperModalWrapper2 = document.querySelectorAll('.product-wrapper')[1];
    let viewProduct = document.querySelectorAll('.fa-eye');
    let productModal = document.querySelector('.modal-overlay');
    let productCloseBtn = document.querySelector('.fa-times')
    viewProduct[productIndex].addEventListener('click', ()=>{
        productModal.classList.add('active')
        objImg.forEach((value,index)=>{
            let divElementOne = elementGenerator('div', 'class', 'swiper-slide product-slide');
            let imgElementOne = elementGenerator('img', 'src', value);
            divElementOne.appendChild(imgElementOne);
    
    
            let divElementTwo = elementGenerator('div', 'class', 'swiper-slide product-slide');
            let imgElementTwo = elementGenerator('img', 'src', value);
            divElementTwo.appendChild(imgElementTwo);
    
            swiperModalWrapper.appendChild(divElementOne);
            swiperModalWrapper2.appendChild(divElementTwo);

            productInfoText.innerHTML = objText
        })
    
        productCloseBtn.addEventListener('click', ()=>{
            productModal.classList.remove('active');
            while(swiperModalWrapper.firstChild){
                swiperModalWrapper.removeChild(swiperModalWrapper.firstChild)
            }
            while(swiperModalWrapper2.firstChild){
                swiperModalWrapper2.removeChild(swiperModalWrapper2.firstChild)
            }

            productInfoText = ""
        })
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


// product modal thumbnail swiper
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
