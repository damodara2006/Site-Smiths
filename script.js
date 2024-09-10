
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demo purposes)
    if (email === 'user@example.com' && password === 'password') {
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});

document.getElementById('registerForm').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Register the user (for demo purposes)
    alert('Registration successful. Please log in.');
    window.location.href = 'login.html';
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Responsive Design

function menuClick() {
    var menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

// Carousel

const carousel = document.getElementById('carousel');

let currentIndex = 0;
const slideCount = carousel.children.length;
const intervalTime = 3000; // Time in milliseconds

function updateCarousel() {
  const width = carousel.clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slideCount; // Loop back to the first slide
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('[data-slide]');
  let currentIndex = 0;
  const intervalTime = 3000; // Time in milliseconds for the autoplay interval
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('bg-gray-800', i === index);
      indicator.classList.toggle('bg-gray-400', i !== index);
    });
  }

  function startAutoplay() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, intervalTime);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  document.getElementById('prev').addEventListener('click', () => {
    stopAutoplay();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    startAutoplay();
  });

  document.getElementById('next').addEventListener('click', () => {
    stopAutoplay();
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    startAutoplay();
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      stopAutoplay();
      currentIndex = i;
      showSlide(currentIndex);
      startAutoplay();
    });
  });

  showSlide(currentIndex);
  startAutoplay();
});

function report1(){
  let max = 9999990;
  let min = 100000;
  let sno = 3;
  let random_id = Math.floor(Math.random()*(max - min) + min );
alert(`Reported successful \n \nYour reported id : ${random_id}`);
localStorage.setItem('ID' , random_id);
localStorage.setItem( 'SERVICE', 'Waste Management');
localStorage.setItem('SNO', sno);
if(sno == 3){
 let n = 0;
  localStorage.setItem('N', 0);
}
}
function report2(){
  let max = 9999990;
  let min = 100000;
  let sno = 3;
  let random_id = Math.floor(Math.random()*(max - min) + min );
alert(`Reported successful \n \nYour reported id : ${random_id}`);
localStorage.setItem('ID' , random_id);
localStorage.setItem( 'SERVICE', 'Drainage System');
localStorage.setItem('SNO', sno);
if(sno == 3){
 let n = 0;
  localStorage.setItem('N', 0);
}
}
function report3(){
  let max = 9999990;
  let min = 100000;
  let sno = 3;
  let random_id = Math.floor(Math.random()*(max - min) + min );
alert(`Reported successful \n \nYour reported id : ${random_id}`);
localStorage.setItem('ID' , random_id);
localStorage.setItem( 'SERVICE', 'Road Management');
localStorage.setItem('SNO', sno);
if(sno == 3){
 let n = 0;
  localStorage.setItem('N', 0);
}
}
function report4(){
  let max = 9999990;
  let min = 100000;
  let sno = 3;
  let random_id = Math.floor(Math.random()*(max - min) + min );
alert(`Reported successful \n \nYour reported id : ${random_id}`);
localStorage.setItem('ID' , random_id);
localStorage.setItem( 'SERVICE', 'Street Light Management');
localStorage.setItem('SNO', sno);
if(sno == 3){
 let n = 0;
  localStorage.setItem('N', 0);
}
}

