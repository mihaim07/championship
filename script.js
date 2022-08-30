const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];
const timeElements = document.querySelectorAll('ul > li > span');

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}



// Countdown
function updateCountdown() {
  setInterval(() => {
    const now = new Date().getTime();
    const startDate = new Date('October 1, 2022 09:00:00');
    const distance = Number(startDate)-Number(now);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;
  }, 1000)
}

////////////////////////////////////////////////////////////////
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Event Listeners
window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    menuBars.classList.replace('menu-bars', 'menu-bars-scroll')
  } else {
    menuBars.classList.replace('menu-bars-scroll', 'menu-bars')
  }
});
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
updateCountdown();
