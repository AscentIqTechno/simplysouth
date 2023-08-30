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

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
 });

// Our Partner
var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});
 //franchise js //

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("franchise-form");

//     form.addEventListener("submit", function (event) {
//         if (!form.captcha.checked) {
//             event.preventDefault();
//             alert("Please complete the captcha to submit the form.");
//         }
//     });
// });


//feedback form from contact page//
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        
        // You can perform validation here before sending the data
        
        // Create an object to hold the form data
        const formData = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            message: message
        };
        console.log(formData, "formData");
        
        // Perform AJAX request to send the form data to the server
        // Example using fetch API
        fetch("http://localhost:3000/feedback/addfeedback", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, e.g., display success message
            console.log(data);
            alert("Message sent successfully!");
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
            alert("An error occurred while sending the message.");
        });
    });
});

//frenchise form from frenchise page//
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("franchise-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const location = document.getElementById("location").value;
        const mobile = document.getElementById("mobile").value;
        const comments = document.getElementById("comments").value;
        
        // You can perform validation here before sending the data
        
        // Create an object to hold the form data
        const formData = {
            name: name,
            email: email,
            address: address,
            mobile: mobile,
            location: location,
            comments: comments
        };
        console.log(formData, "formData");
        
        // Perform AJAX request to send the form data to the server
        // Example using fetch API
        fetch("http://localhost:3000/franchise/addfranchise", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, e.g., display success message
            console.log(data);
            alert("Message sent successfully!");
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
            alert("An error occurred while sending the message.");
        });
    });
});
//signup form//
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const mobile = document.getElementById("mobile").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const remember = document.getElementById("remember").checked;

        console.log(remember);

        if (remember) {
            const formData = {
                firstname: firstname,
                lastname: lastname,
                mobile: mobile,
                address:address,
                email: email,
                password: password
            };

            console.log(formData);

            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Registration successful!");
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred during registration.");
            });
        }
    });
});
//login form//
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

       
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const remember = document.getElementById("remember").checked;

      

        if (remember) {
            const formData = {
                
                email: email,
                password: password
            };

            console.log(formData);

            fetch("http://localhost:3000/auth/signin ", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Registration successful!");
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred during registration.");
            });
        }
    });
});

// //document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("locationForm");
    
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         alert("successfull address update");
        
//         const name = document.getElementById("name").value;
//         const address = document.getElementById("address").value;
//         const mobile = document.getElementById("mobile").value;
        
//         // You can perform validation here before sending the data
        
//         // Create an object to hold the form data
//         const formData = {
//             name: name,
//             address: address,
//             mobile: mobile,
//         };
//         console.log(formData, "formData");
        
//         // Perform AJAX request to send the form data to the server
//         // Example using fetch API
//         fetch("http://localhost:3000/address/addaddress", {
//             method: "POST",
//             body: JSON.stringify(formData),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Handle the response from the server, e.g., display success message
//             console.log(data);
//             alert("Added successfully!");
//         })
//         .catch(error => {
//             // Handle any errors that occurred during the request
//             console.error(error);
//             alert("An error occurred while adding.");
//         });
//     });
// //});

//sociality js

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

  // login up sign up 
