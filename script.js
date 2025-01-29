//-------------------------------------------------------------- Typewriter Effect
const words = [
  "I Build Web Applications",
  "I Love Solving Problems",
  "I Create with Python & React",
  "I Design Digital Experiences",
  "I Learn Something New Every Day"
];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  const typewriterElement = document.getElementById("typewriter");
  
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, j--);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 2) % words.length;
    }
  } else {
    typewriterElement.textContent = currentWord.substring(0, ++j);
    if (j === currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 150);
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

//-------------------------------------------------------------- Loading Screen Fade-Out
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 300);
    // Remove scrollToTop call and replace with direct scroll
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

// Reset all service cards - Add null check and error handling
function resetCards() {
    if (!serviceCards.length) return; // Guard clause if no cards exist
    
    serviceCards.forEach(card => {
        const description = card.querySelector('.description');
        if (description) { // Only modify if description element exists
            card.classList.remove('clicked');
            description.classList.add('hidden');
        }
    });
}

// Toggle service card on click - Add error handling
serviceCards.forEach(card => {
    const description = card.querySelector('.description');
    if (description) { // Only add listener if description exists
        card.addEventListener('click', (event) => {
            event.stopPropagation();
            resetCards();
            card.classList.add('clicked');
            description.classList.remove('hidden');
        });
    }
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

// Add navbar scroll functionality
let lastScrollPosition = 0;
const navbar = document.querySelector('header');
navbar.classList.add('nav-scroll');

// Enhanced navbar scroll functionality
function handleScroll() {
    const currentScrollPosition = window.pageYOffset;
    const scrollDelta = currentScrollPosition - lastScrollPosition;
    
    // Always show navbar at the top of the page
    if (currentScrollPosition < 50) {
        navbar.classList.remove('hidden-nav');
        navbar.classList.add('visible-nav');
        lastScrollPosition = currentScrollPosition;
        return;
    }

    // Add threshold and delay for smoother transitions
    if (Math.abs(scrollDelta) < 10) {
        return;
    }

    // Handle scroll direction
    if (scrollDelta > 0 && currentScrollPosition > 100) {
        // Scrolling down
        navbar.classList.add('hidden-nav');
        navbar.classList.remove('visible-nav');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden-nav');
        navbar.classList.add('visible-nav');
    }

    lastScrollPosition = currentScrollPosition;
}

// Improved scroll event listener with better throttling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = null;
        }, 10);
    }
});

// Reset navbar position on window resize
window.addEventListener('resize', () => {
    navbar.classList.remove('hidden-nav');
    navbar.classList.add('visible-nav');
});

