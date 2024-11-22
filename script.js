// Typewriter effect
const words = ["I'm Pre-final Year Student", "I'm an Aspiring Software Engineer", "Meditation and Gratitude are my Strengths"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  const typewriterElement = document.getElementById("typewriter");
  
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length; // Loop through the words
    }
  } else {
    typewriterElement.textContent = currentWord.substring(0, ++j);
    if (j === currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();

// Modal about me pop-up
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");
const mainContent = document.getElementById("main-content");
const outsideClick = document.getElementById("outsideClick");

aboutMeBtn.addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
    mainContent.classList.add("blurred-bg", "no-pointer-events");
});

closeModal.addEventListener("click", closeModalFunction);
outsideClick.addEventListener("click", closeModalFunction);

function closeModalFunction() {
    aboutModal.classList.add("hidden");
    mainContent.classList.remove("blurred-bg", "no-pointer-events");
}

// Scroll to 50% of the screen height
document.getElementById("myWorksButton").addEventListener("click", () => {
    window.scrollTo({
        top: window.scrollY + window.innerHeight * 0.96, 
        behavior: 'smooth'
    });
});

// Swiper setup
new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});

// Loading screen fade-out
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 300);
    scrollToTop();
});

const navbarToggle = document.getElementById("navbar-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");

// Open mobile menu on button click
navbarToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});

// Close mobile menu on close button click
closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
});

// Close mobile menu if clicked outside (on the overlay)
window.addEventListener("click", (e) => {
    // Close the menu only if clicked on the overlay, but not on the links or the toggle button
    if (mobileMenu.classList.contains("flex") && !mobileMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
    });
});

// Show the tooltip when hovering over the button
const button = document.querySelector('button');
const tooltip = document.querySelector('.tooltip');

button.addEventListener('mouseenter', () => {
    tooltip.classList.remove('opacity-0'); // Make the tooltip visible
    tooltip.classList.add('opacity-100');  // Add the opacity transition
});

button.addEventListener('mouseleave', () => {
    tooltip.classList.remove('opacity-100'); // Hide the tooltip
    tooltip.classList.add('opacity-0');  // Add the opacity transition
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scrolling effect
    });
}


// Smooth Scrolling for navigation
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      window.scrollTo({
          top: target.offsetTop - 50, // Add margin-top for offset
          behavior: 'smooth'
      });
  });
});

const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      // Reset all cards to their initial state
      serviceCards.forEach(c => {
        c.classList.remove('clicked');
        c.querySelector('.description').classList.add('hidden');
      });

      // Apply the clicked state to the current card
      card.classList.add('clicked');
      card.querySelector('.description').classList.remove('hidden');
    });
  });


const swiper = new Swiper('.swiper-container2', {
    slidesPerView: 5, // Adjust number of cards shown
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 4 },
        768: { slidesPerView: 7 },
        1024: { slidesPerView: 10 },
    },
});

document.getElementById("form").onsubmit = function() {
    setTimeout(()=>{
        scrollToTop();
        document.getElementById("form").reset();
    }, 1000);
};