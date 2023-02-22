// for product view modal

let productObj = {
  belly_img: [
    "index_embed/products/belly/AJO_main.jpg",
    "index_embed/products/belly/AJO_open.jpg",
    "index_embed/products/belly/AJO_close.jpg",
    "index_embed/products/belly/AJO_chopped.jpg",
    "index_embed/products/belly/AJO_chopped_open.jpg",
  ],
  belly_text:
    "Our mouth-watering and succulent pork belly dish that is slow-roasted to perfection, resulting in a crispy and flavorful outer layer with juicy and tender meat on the inside. We take it a step further by adding our signature spicy and special flavor to create a unique and unforgettable taste experience.",
  chili_garlic_img: [
    "index_embed/products/chili_garlic/chili_garlic.jpg",
    "index_embed/products/chili_garlic/chili_garlic2.jpg",
    "index_embed/products/chili_garlic/chili_garlic3.jpg",
    "index_embed/products/chili_garlic/chili_garlic4.jpg",
  ],
  chili_garlic_text:
    "We use only the freshest ingredients to make our chili garlic sauce, ensuring that each jar is packed with authentic and bold flavors. Our sauce is perfect for those who love to add some heat to their meals, and can be used as a dip, marinade, or as an ingredient in cooking.",
  cochinillio_img: [
    "index_embed/products/cochinillo/cochinillio.jpg",
    "index_embed/products/cochinillo/cochinillio2.jpg",
    "index_embed/products/cochinillo/cochinillio3.jpg",
    "index_embed/products/cochinillo/cochinillio4.jpg",
  ],
  cochinillio_text:
    "Our cochinillo is prepared using the highest quality ingredients and traditional cooking techniques, ensuring that it is both delicious and authentic. Whether you're hosting a wedding, corporate event, or any other large gathering, our cochinillo is sure to impress and leave a lasting impression on your guests.",
  sisig_img: [
    "index_embed/products/sisig/AJO_sisig.jpg",
    "index_embed/products/sisig/AJO_sisig2.jpg",
    "index_embed/products/sisig/AJO_sisig3.jpg",
    "index_embed/products/sisig/AJO_sisig4.jpg",
  ],
  sisig_text:
    "Our on-the-go sisig is a modern take on this classic dish that can be enjoyed on-the-go without compromising on taste or quality. We use only the highest quality ingredients to make our sisig, ensuring that each bite is packed with flavor and satisfaction. We carefully prepare and season the pork, resulting in a savory and succulent dish that is sure to please even the most discerning palate.",
  vinegar_img: [
    "index_embed/products/vinegar/vinegar1.jpg",
    "index_embed/products/vinegar/vinegar2.jpg",
  ],
  vinegar_text:
    "Our garlic vinegar is a flavorful and aromatic condiment that is perfect for adding a tangy and zesty kick to a variety of dishes. Made with fresh garlic and high-quality vinegar, our garlic vinegar is a versatile condiment that can be used in cooking or as a dipping sauce.",
};

modalInfoGallery(productObj.belly_img, productObj.belly_text, 0);
modalInfoGallery(productObj.chili_garlic_img, productObj.chili_garlic_text, 1);
modalInfoGallery(productObj.cochinillio_img, productObj.cochinillio_text, 2);
modalInfoGallery(productObj.sisig_img, productObj.sisig_text, 3);
modalInfoGallery(productObj.vinegar_img, productObj.vinegar_text, 4);

// a function to add content in the modal product view
function modalInfoGallery(objImg, objText, productIndex) {
  let productInfoText = document.querySelector(".product-info p");
  let swiperModalWrapper = document.querySelectorAll(".product-wrapper")[0];
  let swiperModalWrapper2 = document.querySelectorAll(".product-wrapper")[1];
  let viewProduct = document.querySelectorAll(".fa-eye");
  let productModal = document.querySelector(".modal-overlay");
  let productCloseBtn = document.querySelector(".fa-times");
  viewProduct[productIndex].addEventListener("click", () => {
    productModal.classList.add("active");
    objImg.forEach((value, index) => {
      let divElementOne = elementGenerator(
        "div",
        "class",
        "swiper-slide product-slide"
      );
      let imgElementOne = elementGenerator("img", "src", value);
      divElementOne.appendChild(imgElementOne);

      let divElementTwo = elementGenerator(
        "div",
        "class",
        "swiper-slide product-slide"
      );
      let imgElementTwo = elementGenerator("img", "src", value);
      divElementTwo.appendChild(imgElementTwo);

      swiperModalWrapper.appendChild(divElementOne);
      swiperModalWrapper2.appendChild(divElementTwo);

      productInfoText.innerHTML = objText;
    });

    productCloseBtn.addEventListener("click", () => {
      productModal.classList.remove("active");
      while (swiperModalWrapper.firstChild) {
        swiperModalWrapper.removeChild(swiperModalWrapper.firstChild);
      }
      while (swiperModalWrapper2.firstChild) {
        swiperModalWrapper2.removeChild(swiperModalWrapper2.firstChild);
      }

      productInfoText.innerHTML = "";
    });
  });
}

// A function to generate element with attribute

function elementGenerator(element, attribute, value) {
  let mainEl = document.createElement(element);
  let mainAttr = document.createAttribute(attribute);
  mainAttr.value = value;
  mainEl.setAttributeNode(mainAttr);

  return mainEl;
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
let menubar = document.querySelector(".menu-bars");
let navbar = document.querySelector(".navbar");

menubar.addEventListener("click", () => {
  menubar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// for home carousel
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// for reviews carousel
var swiper = new Swiper(".reviews-swiper", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// for second reviews carousel
var swiper = new Swiper(".reviews-swiper-two", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// for products add to cart functionality

// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})

let productPrice = [
  {
    name: "Lechon Belly",
    spicy: 690,
    special: 670,
    kilo: [1, 2, 3, 4, 5],
  },
  {
    name: "Chili Garlic",
    price: 99,
  },
  {
    name: "Cochinillo",
    price: [6400, 7300, 8400],
  },
  {
    name: "Sisig",
    regular: 150,
    spicy: 170,
  },
  {
    name: "Garlic Vinegar",
    price: 129,
  },
];

// variation buttons
let belly_flavor_variation = document.querySelectorAll(
  ".belly .variation-flavor .btn"
);
let belly_chopped_variation = document.querySelectorAll(
  ".belly .variation-chopped .btn"
);

let cochinillo_size_variation = document.querySelectorAll(
  ".cochinillo .variation-size .btn"
);
let sisig_flavor_variation = document.querySelectorAll(
  ".sisig .variation-flavor .btn"
);

// quantity buttons
let belly_qty = document.querySelector(".belly .variation-qty span");
let belly_qtyBtn = document.querySelectorAll(".belly .variation-qty .fas");

let chili_qty = document.querySelector(".chili-garlic .variation-qty span");
let chili_qtyBtn = document.querySelectorAll(
  ".chili-garlic  .variation-qty .fas"
);

let vinegar_qty = document.querySelector(".vinegar .variation-qty span");
let vinegar_qtyBtn = document.querySelectorAll(".vinegar .variation-qty .fas");

let sisig_qty = document.querySelector(".sisig .variation-qty span");
let sisig_qtyBtn = document.querySelectorAll(".sisig .variation-qty .fas");

// price selectors
let belly_price = document.querySelectorAll("span.price")[0];
let chili_price = document.querySelectorAll("span.price")[1];
let cochinillo_price = document.querySelectorAll("span.price")[2];
let sisig_price = document.querySelectorAll("span.price")[3];
let vinegar_price = document.querySelectorAll("span.price")[4];

// call each price objects
let bellyPriceObj = productPrice[0];
let chiliPriceObj = productPrice[1];
let cochinilloPriceObj = productPrice[2];
let sisigPriceObj = productPrice[3];
let vinegarPriceObj = productPrice[4];

// function for the lechon belly quantity and product variation buttons
function bellyQtyVarBtn(
  qtyBtn,
  qtyInner,
  priceObj,
  priceInner,
  btnVarFlavor,
  btnVarChop
) {
  // for chopped
  for (element of btnVarChop) {
    element.addEventListener("click", (event) => {
      event.target.classList.add("disabled");
      btnVarChop.forEach((value) => {
        if (value != event.target) {
          value.classList.remove("disabled");
        }
      });
    });
  }
  //   for flavor
  for (element of btnVarFlavor) {
    element.addEventListener("click", (event) => {
      event.target.classList.add("disabled");
      btnVarFlavor.forEach((value) => {
        if (value != event.target) {
          value.classList.remove("disabled");
        }
      });
      if (event.target.innerHTML == "Spicy") {
        priceInner.innerHTML = `₱ ${productPrice[0].spicy}.00`;
        forBellyQty("spicy");
      } else {
        priceInner.innerHTML = `₱ ${productPrice[0].special}.00`;
        forBellyQty("special");
      }
    });
  }
  forBellyQty("special");
  function forBellyQty() {
    let click = 0;
    kilo = priceObj.kilo;
    qtyInner.innerHTML = `${kilo[0]} Kilo`;

    if (arguments[0] == "spicy") {
      qtyBtn[0].addEventListener("click", () => {
        click--;
        if (click < 0) {
          click = 4;
        }
        qtyInner.innerHTML = `${kilo[click]} Kilo`;
        price = priceObj.spicy * kilo[click];
        price_converted = price.toLocaleString("us-EN");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
      qtyBtn[1].addEventListener("click", () => {
        click++;
        if (click > kilo.length - 1) {
          click = 0;
        }
        qtyInner.innerHTML = `${kilo[click]} Kilo`;
        price = priceObj.spicy * kilo[click];
        price_converted = price.toLocaleString("us-EN");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
    }
    if (arguments[0] == "special") {
      qtyBtn[0].addEventListener("click", () => {
        click--;
        if (click < 0) {
          click = 4;
        }
        qtyInner.innerHTML = `${kilo[click]} Kilo`;
        price = priceObj.special * kilo[click];
        price_converted = price.toLocaleString("us-EN");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
      qtyBtn[1].addEventListener("click", () => {
        click++;
        if (click > kilo.length - 1) {
          click = 0;
        }
        qtyInner.innerHTML = `${kilo[click]} Kilo`;
        price = priceObj.special * kilo[click];
        price_converted = price.toLocaleString("us-EN");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
    }
  }
}
// function for vinegar and chili garlic quantity buttons

function vinegarChiliQtyBtn(qtyBtn, qtyInner, priceObj, priceInner) {
  let clicks = 1;

  qtyBtn[0].addEventListener("click", () => {
    clicks--;
    if (clicks < 1) {
      clicks = 10;
    }
    qtyInner.innerHTML = clicks;
    price = priceObj.price * clicks;
    price_converted = price.toLocaleString("en-US");
    priceInner.innerHTML = `₱ ${price_converted}.00`;
  });
  qtyBtn[1].addEventListener("click", () => {
    clicks++;
    if (clicks > 10) {
      clicks = 1;
    }
    qtyInner.innerHTML = clicks;
    price = priceObj.price * clicks;
    price_converted = price.toLocaleString("en-US");
    priceInner.innerHTML = `₱ ${price_converted}.00`;
  });
}

// function for sisig variation and quantity buttons

function sisigQtyVarBtn(qtyBtn, qtyInner, priceObj, priceInner, btnVariation) {
  for (element of btnVariation) {
    element.addEventListener("click", (event) => {
      event.target.classList.add("disabled");
      btnVariation.forEach((value) => {
        if (value != event.target) {
          value.classList.remove("disabled");
        }
      });
      if (event.target.innerHTML == "Spicy") {
        priceInner.innerHTML = `₱ ${priceObj.spicy}.00`;
        forQtyBtn("spicy");
      } else {
        priceInner.innerHTML = `₱ ${priceObj.regular}.00`;
        forQtyBtn("regular");
      }
    });
  }
  forQtyBtn("regular");
  function forQtyBtn() {
    let click = 1;
    qtyInner.innerHTML = click;
    if (arguments[0] == "spicy") {
      qtyBtn[0].addEventListener("click", () => {
        click--;
        if (click < 1) {
          click = 10;
        }
        qtyInner.innerHTML = click;
        price = priceObj.regular * click;
        price_converted = price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
      qtyBtn[1].addEventListener("click", () => {
        click++;
        if (click > 10) {
          click = 1;
        }
        qtyInner.innerHTML = click;
        price = priceObj.spicy * click;
        price_converted = price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
    }
    if (arguments[0] == "regular") {
      qtyBtn[0].addEventListener("click", () => {
        click--;
        if (click < 1) {
          click = 10;
        }
        qtyInner.innerHTML = click;
        price = priceObj.regular * click;
        price_converted = price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
      qtyBtn[1].addEventListener("click", () => {
        click++;
        if (click > 10) {
          click = 1;
        }

        qtyInner.innerHTML = click;
        price = priceObj.regular * click;
        price_converted = price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price_converted}.00`;
      });
    }
  }
}

// function for cochinillo size buttons

function cochinilloSizeBtn(priceObj, priceInner, btnVariation) {
  let family_price = priceObj.price[0];
  let barkada_price = priceObj.price[1];
  let party_price = priceObj.price[2];
  for (element of btnVariation) {
    element.addEventListener("click", (event) => {
      event.target.classList.add("disabled");
      btnVariation.forEach((value) => {
        if (value != event.target) {
          value.classList.remove("disabled");
        }
      });
      if (event.target.innerHTML == "Barkada Size") {
        price = barkada_price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price}`;
      }
      if (event.target.innerHTML == "Family Size") {
        price = family_price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price}`;
      }
      if (event.target.innerHTML == "Party Size") {
        price = party_price.toLocaleString("en-US");
        priceInner.innerHTML = `₱ ${price}`;
      }
    });
  }
}

//  product button function callbacks
vinegarChiliQtyBtn(chili_qtyBtn, chili_qty, chiliPriceObj, chili_price);
vinegarChiliQtyBtn(vinegar_qtyBtn, vinegar_qty, vinegarPriceObj, vinegar_price);

cochinilloSizeBtn(
  cochinilloPriceObj,
  cochinillo_price,
  cochinillo_size_variation
);

bellyQtyVarBtn(
  belly_qtyBtn,
  belly_qty,
  bellyPriceObj,
  belly_price,
  belly_flavor_variation,
  belly_chopped_variation
);

sisigQtyVarBtn(
  sisig_qtyBtn,
  sisig_qty,
  sisigPriceObj,
  sisig_price,
  sisig_flavor_variation
);


// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('₱', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '₱' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty



// for messenger widget
// <!-- Your SDK code -->

var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "116813004661401");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v16.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// scrollspy

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
};
