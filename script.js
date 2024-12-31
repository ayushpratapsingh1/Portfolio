//-------------------------------------------------------------- Typewriter Effect
const words = ["I'm Pre-final Year Student", "I'm an Aspiring Software Engineer", "Dream Big Aim High"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

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
  setTimeout(type, 80);
}

type();


//-------------------------------------------------------------- Modal: About Me Pop-up
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");
const mainContent = document.getElementById("main-content");
const outsideClick = document.getElementById("outsideClick");

aboutMeBtn.addEventListener("click", () => {
    aboutModal.classList.remove("hidden");
    mainContent.classList.add("blurred-bg", "no-pointer-events");
});

function closeModalFunction() {
    aboutModal.classList.add("hidden");
    mainContent.classList.remove("blurred-bg", "no-pointer-events");
}

closeModal.addEventListener("click", closeModalFunction);
outsideClick.addEventListener("click", closeModalFunction);


//-------------------------------------------------------------- Swiper Initialization

// Tech Stack Swiper
new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
    }
});


//-------------------------------------------------------------- Loading Screen Fade-Out
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 300);
    scrollToTop();
});


//-------------------------------------------------------------- Navbar and Mobile Menu Functionality

const navbarToggle = document.getElementById('navbar-toggle');
const mobileMenu = document.getElementById('mobile-menu');

        navbarToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });


//-------------------------------------------------------------- Tooltip for Buttons
const button = document.querySelector('button');
const tooltip = document.querySelector('.tooltip');

button.addEventListener('mouseenter', () => tooltip.classList.replace('opacity-0', 'opacity-100'));
button.addEventListener('mouseleave', () => tooltip.classList.replace('opacity-100', 'opacity-0'));

//-------------------------------------------------------------- Smooth Scrolling for Navigation
document.querySelectorAll('.nav-item, .mobile-nav-link').forEach(link => {
  if(link.href.includes('#')) {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default anchor click behavior
      const targetSelector = link.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 40,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Target not found for selector: ${targetSelector}`);
      }
    });
  }
});
  


//-------------------------------------------------------------- Service Card Functionality
const serviceCards = document.querySelectorAll('.service-card');

// Reset all service cards
function resetCards() {
  serviceCards.forEach(card => {
    card.classList.remove('clicked');
    card.querySelector('.description').classList.add('hidden');
  });
}

// Toggle service card on click
serviceCards.forEach(card => {
  card.addEventListener('click', (event) => {
    event.stopPropagation();
    resetCards();
    card.classList.add('clicked');
    card.querySelector('.description').classList.remove('hidden');
  });
});

// Close cards when clicking outside
document.addEventListener('click', resetCards);


//-------------------------------------------------------------- Animate on Scroll (AOS)
document.addEventListener('DOMContentLoaded', () => AOS.init());

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const homeSection = document.getElementById('home');

    window.addEventListener('scroll', function() {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        
        if (window.pageYOffset > homeSectionBottom) {
            scrollToTopBtn.classList.remove('opacity-0');
            scrollToTopBtn.classList.add('opacity-100');
        } else {
            scrollToTopBtn.classList.remove('opacity-100');
            scrollToTopBtn.classList.add('opacity-0');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add this code to handle the auto-hidable header

