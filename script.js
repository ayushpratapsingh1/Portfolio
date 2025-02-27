// Simple but elegant typewriter effect
const phrases = [
    "I Build Web Applications",
    "I Love Solving Problems",
    "I Create with Python & React", 
    "I Design Digital Experiences",
    "I Learn Something New Every Day"
  ];
  
  class SimpleTypewriter {
    constructor(element, phrases, options = {}) {
      // DOM element
      this.element = document.getElementById(element);
      this.phrases = phrases;
      
      // Configuration with reasonable defaults
      this.options = {
        typeSpeed: 80,
        deleteSpeed: 40,
        pauseBeforeDelete: 1500,
        pauseBeforeType: 500,
        cursorChar: '|',
        ...options
      };
      
      // State variables
      this.phraseIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      this.isPaused = false;
      
      // Add cursor element
      this.addCursor();
      
      // Start typing
      this.type();
    }
    
    addCursor() {
      this.cursorElement = document.createElement('span');
      this.cursorElement.textContent = this.options.cursorChar;
      this.cursorElement.className = 'typewriter-cursor';
      this.element.parentNode.insertBefore(this.cursorElement, this.element.nextSibling);
    }
    
    type() {
      // Get current phrase
      const currentPhrase = this.phrases[this.phraseIndex];
      
      // Determine if complete
      const isComplete = this.isDeleting 
        ? this.charIndex === 0 
        : this.charIndex === currentPhrase.length;
      
      // Handle completing type/delete cycles
      if (isComplete) {
        // If done deleting, move to next phrase
        if (this.isDeleting) {
          this.isDeleting = false;
          this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
          this.isPaused = true;
          
          setTimeout(() => {
            this.isPaused = false;
            this.type();
          }, this.options.pauseBeforeType);
          return;
        }
        
        // If done typing, pause then start deleting
        this.isPaused = true;
        setTimeout(() => {
          this.isPaused = false;
          this.isDeleting = true;
          this.type();
        }, this.options.pauseBeforeDelete);
        return;
      }
      
      // Skip if paused
      if (this.isPaused) return;
      
      // Update character index
      this.charIndex = this.isDeleting ? this.charIndex - 1 : this.charIndex + 1;
      
      // Update DOM text
      this.element.textContent = currentPhrase.substring(0, this.charIndex);
      
      // Schedule next update
      setTimeout(
        () => this.type(), 
        this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed
      );
    }
  }
  
  // Initialize on document load
  document.addEventListener('DOMContentLoaded', () => {
    const typewriter = new SimpleTypewriter('typewriter', phrases, {
      cursorChar: '_',
      typeSpeed: 70,
      deleteSpeed: 40
    });
  });

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
          top: target.offsetTop - 70,
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

