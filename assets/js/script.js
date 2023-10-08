const techDrive = document.getElementById("txtmouseover");

techDrive.addEventListener("mouseover", () => {
    const animationDistance = 6;

    techDrive.style.bottom = `${animationDistance}px`;

    setTimeout(() => {
        techDrive.style.bottom = "0";
    }, 300);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let search = document.querySelector('.search-bar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    search.classList.toggle('active');
}

window.onscroll = () =>{
menu.classList.remove('bx-x');
navbar.classList.remove('active');
search.classList.remove('active');
}




const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");

let currentIndex = 0;

function slideTo(index) {
  currentIndex = index;
  const translateX = -currentIndex * 100 + "%";
  imageContainer.style.transform = `translateX(${translateX})`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slideTo(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideTo(currentIndex);
}
setInterval(nextSlide, 5000);

var search_field = document.getElementById("search-bar");
var submit = document.getElementById("submit");

var searchfun = function (search) {
  if (search.style.display === 'none' || search.style.display === '') {
    submit.addEventListener("click", myfun);

    function myfun() {
      search.style.transform = 'translateX(0)';
      search.style.display = "block";

    }
  } else {
    search.style.transform = 'translateX(-100%)';
    search.style.display = "none";

  }
}
searchfun(search_field);

function animateCount(element, target, duration) {
  let start = 0;
  const step = target / (duration / 16);

  function updateCount() {
    start += step;
    if (start <= target) {
      element.textContent = Math.round(start);
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target;
    }
  }

  updateCount();
}

function startCountAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const numElement = entry.target.querySelector('.num');
      const targetNumber = parseInt(numElement.textContent, 10);
      animateCount(numElement, targetNumber, 2000); 
      observer.unobserve(entry.target); 
    }
  });
}
const numElements = document.querySelectorAll('.num');
const observer = new IntersectionObserver(startCountAnimation, {
  threshold: 0.2,
});

numElements.forEach((element) => {
  observer.observe(element.closest('li')); 
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(
      "#scroll-up-bottom-element, .home-txt h1, .home-txt h2"
    );

    scrollElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.transition = "transform 0.3s ease";
        element.style.transform = "scale(1.05)";
      });

      element.addEventListener("mouseleave", () => {
        element.style.transition = "transform 0.3s ease";
        element.style.transform = "scale(1)";
      });
    });
  });



const button = document.getElementById('back-to-top-button');

button.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});
