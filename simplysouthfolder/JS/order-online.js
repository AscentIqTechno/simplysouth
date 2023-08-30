// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// slider section 

const slider = document.getElementById('slider');
  const slides = slider.querySelector('.slides');
  const slideWidth = slides.querySelector('.slide').clientWidth;
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0 || index >= slides.children.length) {
      return;
    }
    currentIndex = index;
    slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    goToSlide(currentIndex);
  }, 5000); // Change slide every 5 seconds

  //add to cart 

  let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {

        id: 1,
        name: 'Ghee Roast paper masala dosa ',
        image: '../images/order-online/1.PNG',
        price: 200
    },
    {
        id: 2,
        name: 'Paneer Dosa ',
        image: '../images/order-online/2.PNG',
        price: 220
    },
    {
        id: 3,
        name: 'Butter Paneer Dosa',
        image: '../images/order-online/3.PNG',
        price: 250
    },
    {
        id: 4,
        name: 'Mix veg Masala Dosa',
        image: '../images/order-online/4.PNG',
        price: 180
    },
    {
        id: 5,
        name: 'Mix Veg butter Masala Dosa',
        image: '../images/order-online/5.PNG',
        price: 200
    },
    {
        id: 6,
        name: 'Ghee Roast Masala Dosa',
        image: '../images/order-online/6.PNG',
        price: 170
    },
    {
        id: 7,
        name: 'Garlic Onion Masala Dosa',
        image: '../images/order-online/7.PNG',
        price: 160
    },
    {
        id: 8,
        name: 'Cheese Onion Masala Dosa',
        image: '../images/order-online/8.PNG',
        price: 160
    },
    {
        id: 9,
        name: 'Gun Powder Masala Dosa',
        image: '../images/order-online/9.PNG',
        price: 160
    },
    {
        id: 10,
        name: 'Butter Masala Dosa',
        image: '../images/order-online/10.PNG',
        price: 150
    },
    {
        id: 11,
        name: 'Butter Onion Masala Dosa',
        image: '../images/order-online/11.PNG',
        price: 180
    },
    {
        id: 12,
        name: 'Coconut Masala Dosa',
        image: '../images/order-online/12.PNG',
        price: 160
    },
    {
        id: 13,
        name: 'Mysore Masala Dosa',
        image: '../images/order-online/13.PNG',
        price: 150
    },
    {
        id: 14,
        name: 'Cheeze Masala Dosa',
        image: '../images/order-online/14.PNG',
        price: 150
    },
    {
        id: 15,
        name: 'Capsicum Onion Masala Dosa',
        image: '../images/order-online/15.PNG',
        price: 160
    },
    {
        id: 16,
        name: 'Tomato Onion Masala Dosa',
        image: '../images/order-online/16.PNG',
        price: 160
    },
    {
        id: 17,
        name: 'Shezwan Masala Dosa',
        image: '../images/order-online/17.PNG',
        price: 150
    },
    {
        id: 18,
        name: 'Paper Masala Dosa',
        image: '../images/order-online/18.PNG',
        price: 180
    },
    {
        id: 19,
        name: 'Garlic Masala Dosa',
        image: '../images/order-online/19.PNG',
        price: 150
    },
    {
        id: 20,
        name: 'Onion Masala Dosa',
        image: '../images/order-online/20.PNG',
        price: 150
    },
    {
        id: 21,
        name: 'Set Dosa',
        image: '../images/order-online/21.PNG',
        price: 150
    },
    {
        id: 22,
        name: 'Masala Dosa',
        image: '../images/order-online/22.PNG',
        price: 140
    },
    {
        id: 23,
        name: 'Plain Dosa',
        image: '../images/order-online/23.PNG',
        price: 140
    },
    {
        id: 24,
        name: 'Special Thali',
        image: '../images/order-online/24.PNG',
        price: 250
    },
    {
        id: 25,
        name: 'Family Dosa',
        image: '../images/order-online/25.PNG',
        price: 500
    },
    {
        id: 26,
        name: 'Malabar Parotta with veg korma',
        image: '../images/order-online/26.PNG',
        price: 250
    },
    {
        id: 27,
        name: 'Super Crispy idli',
        image: '../images/order-online/27.PNG',
        price: 200
    },
    {
        id: 28,
        name: 'Dahi Vada',
        image: '../images/order-online/28.PNG',
        price: 170
    },
    {
        id: 29,
        name: 'Chilli and Milli',
        image: '../images/order-online/29.PNG',
        price: 300
    },
    {
        id: 30,
        name: 'Special Uttappam Platter',
        image: '../images/order-online/30.PNG',
        price: 250
    },
    {
        id: 31,
        name: 'Special South Indian Platter',
        image: '../images/order-online/31.PNG',
        price: 250
    },
    {
        id: 32,
        name: 'Simply South Special Dosa',
        image: '../images/order-online/32.PNG',
        price: 250
    },
    {
        id: 33,
        name: 'Simply South Special Uttapam',
        image: '../images/order-online/33.PNG',
        price: 250
    },
    {
        id: 34,
        name: 'Onion Utp',
        image: '../images/order-online/34.PNG',
        price: 160
    },
    {
        id: 35,
        name: 'Tomato Utp',
        image: '../images/order-online/35.PNG',
        price: 160
    },
    {
        id: 36,
        name: 'Mix Veg Utp',
        image: '../images/order-online/36.PNG',
        price: 180
    },
    {
        id: 37,
        name: 'Paneer Onion Utp',
        image: '../images/order-online/37.PNG',
        price: 200
    },
    {
        id: 38,
        name: 'Mirchi Onion Utp',
        image: '../images/order-online/38.PNG',
        price: 160
    },
    {
        id: 39,
        name: 'Butter Onion Utp',
        image: '../images/order-online/39.PNG',
        price: 160
    },
    {
        id: 40,
        name: 'Cheese Onion Utp',
        image: '../images/order-online/40.PNG',
        price: 180
    },
    {
        id: 41,
        name: 'Capsicum Onion',
        image: '../images/order-online/41.PNG',
        price: 180
    },
    {
        id: 42,
        name: 'Tomato Utp',
        image: '../images/order-online/42.PNG',
        price: 200
    },
    {
        id: 43,
        name: 'Rawa Paneer Dosa',
        image: '../images/order-online/43.PNG',
        price: 220
    },
    {
        id: 44,
        name: 'Rawa Butter Onion Masala Dosa',
        image: '../images/order-online/44.PNG',
        price: 200
    },
    {
        id: 45,
        name: 'Rawa Ghee Onion Masala Dosa',
        image: '../images/order-online/45.PNG',
        price: 220
    },
    {
        id: 46,
        name: 'Rawa Butter Masala Dosa',
        image: '../images/order-online/46.PNG',
        price: 180
    },
    {
        id: 47,
        name: 'Rawa Cheese Onion Dosa',
        image: '../images/order-online/47.PNG',
        price: 200
    },
    {
        id: 48,
        name: 'Rawa Onion Masala Dosa',
        image: '../images/order-online/48.PNG',
        price: 180
    },
    {
        id: 49,
        name: 'Rawa coconut Masala Dosa',
        image: '../images/order-online/49.PNG',
        price: 180
    },
    {
        id: 50,
        name: 'Rawa Masala Dosa',
        image: '../images/order-online/50.PNG',
        price: 160
    },
    {
        id: 51,
        name: 'Rawa Gun Powder Dosa',
        image: '../images/order-online/51.PNG',
        price: 180
    },
    {
        id: 52,
        name: 'Rawa Shezwan Masala powder',
        image: '../images/order-online/21.PNG',
        price: 180
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button class="button2" onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button class="button2" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="button2" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// add location form pop up 

const addLocationButton = document.querySelector('.main-btn[href="#location"]');
const locationFormOverlay = document.getElementById('locationFormOverlay');
const closeFormButton = document.getElementById('closeForm');

addLocationButton.addEventListener('click', () => {
    locationFormOverlay.style.display = 'flex';
});

closeFormButton.addEventListener('click', () => {
    locationFormOverlay.style.display = 'none';
});

document.getElementById('locationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access form inputs using document.getElementById or other methods
    // Example:
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const outlet = document.getElementById('outlet').value;
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Outlet:', outlet);
});
