/**
 * Main Portfolio JavaScript - DevOps & FinOps Engineer
 * Ayush Pratap Singh - Optimized and Clean Code
 */

// =============================================================================
// CONFIGURATION & CONSTANTS
// =============================================================================

const CONFIG = {
    typewriter: {
        phrases: [
            "Aspiring DevOps Engineer",
            "Learning Cloud Technologies",
            "Exploring Kubernetes & Docker", 
            "Building with Terraform",
            "Growing in DevOps & FinOps"
        ],
        typeSpeed: 70,
        deleteSpeed: 40,
        pauseBeforeDelete: 1500,
        pauseBeforeType: 500
    }
};

// =============================================================================
// TYPEWRITER EFFECT
// =============================================================================

class TypewriterEffect {
    constructor(elementId, phrases, options = {}) {
        this.element = document.getElementById(elementId);
        if (!this.element) return;
        
        this.phrases = phrases;
        this.options = { ...CONFIG.typewriter, ...options };
        
        this.phraseIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentPhrase = this.phrases[this.phraseIndex];
        const isComplete = this.isDeleting 
            ? this.charIndex === 0 
            : this.charIndex === currentPhrase.length;
        
        if (isComplete) {
            if (this.isDeleting) {
                this.isDeleting = false;
                this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
                this.scheduleNext(this.options.pauseBeforeType);
            } else {
                this.isDeleting = true;
                this.scheduleNext(this.options.pauseBeforeDelete);
            }
            return;
        }
        
        if (!this.isPaused) {
            this.charIndex = this.isDeleting ? this.charIndex - 1 : this.charIndex + 1;
            this.element.textContent = currentPhrase.substring(0, this.charIndex);
        }
        
        const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        setTimeout(() => this.type(), speed);
    }
    
    scheduleNext(delay) {
        this.isPaused = true;
        setTimeout(() => {
            this.isPaused = false;
            this.type();
        }, delay);
    }
}

// =============================================================================
// MODAL MANAGEMENT
// =============================================================================

class ModalManager {
    constructor() {
        this.aboutModal = document.getElementById('aboutModal');
        this.aboutBtn = document.getElementById('aboutMeBtn');
        this.closeBtn = document.getElementById('closeModal');
        this.outsideClick = document.getElementById('outsideClick');
        this.mainContent = document.getElementById('main-content');
        
        this.bindEvents();
    }
    
    bindEvents() {
        if (this.aboutBtn) {
            this.aboutBtn.addEventListener('click', () => this.openModal());
        }
        
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeModal());
        }
        
        if (this.outsideClick) {
            this.outsideClick.addEventListener('click', () => this.closeModal());
        }
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.aboutModal && !this.aboutModal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }
    
    openModal() {
        if (this.aboutModal) {
            this.aboutModal.classList.remove('hidden');
            if (this.mainContent) {
                this.mainContent.classList.add('blurred-bg', 'no-pointer-events');
            }
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal() {
        if (this.aboutModal) {
            this.aboutModal.classList.add('hidden');
            if (this.mainContent) {
                this.mainContent.classList.remove('blurred-bg', 'no-pointer-events');
            }
            document.body.style.overflow = '';
        }
    }
}

// =============================================================================
// NAVIGATION MANAGEMENT
// =============================================================================

class NavigationManager {
    constructor() {
        this.navbarToggle = document.getElementById('navbar-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
        this.bindEvents();
        this.initSmoothScrolling();
    }
    
    bindEvents() {
        // Mobile menu toggle
        if (this.navbarToggle && this.mobileMenu) {
            this.navbarToggle.addEventListener('click', () => {
                this.mobileMenu.classList.toggle('hidden');
            });
            
            this.mobileMenu.addEventListener('click', () => {
                this.mobileMenu.classList.add('hidden');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.navbarToggle.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                    this.mobileMenu.classList.add('hidden');
                }
            });
        }
        
        // Scroll to top functionality
        if (this.scrollToTopBtn) {
            window.addEventListener('scroll', () => this.handleScroll());
            this.scrollToTopBtn.addEventListener('click', () => this.scrollToTop());
        }
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset > 300;
        
        if (scrolled) {
            this.scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            this.scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            this.scrollToTopBtn.classList.add('opacity-0', 'invisible');
            this.scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    initSmoothScrolling() {
        document.querySelectorAll('.nav-item, .mobile-nav-link').forEach(link => {
            if (link.href && link.href.includes('#')) {
                link.addEventListener('click', (e) => {
                    // Check if it's an external link or same page link
                    const href = link.getAttribute('href');
                    
                    if (href.startsWith('./index.html#') || href.startsWith('index.html#')) {
                        // External page with anchor - let browser handle normally
                        return;
                    }
                    
                    if (href.startsWith('#')) {
                        // Same page anchor
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const target = document.getElementById(targetId);
                        
                        if (target) {
                            const headerOffset = 80;
                            const elementPosition = target.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                            
                            // Close mobile menu if open
                            if (this.mobileMenu) {
                                this.mobileMenu.classList.add('hidden');
                            }
                        }
                    }
                });
            }
        });
    }
}


// =============================================================================
// LOADING SCREEN MANAGER
// =============================================================================

class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            this.hideLoadingScreen();
        });
    }
    
    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '0';
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 300);
        }
        
        // Scroll to top after loading
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// =============================================================================
// SOCIAL MENU MANAGER
// =============================================================================

class SocialMenuManager {
    constructor() {
        this.socialMenu = document.getElementById('socialMenu');
        this.toggleBtn = document.getElementById('socialToggleBtn');
        this.hideTimeout = null;
        
        this.bindEvents();
    }
    
    bindEvents() {
        if (this.toggleBtn && this.socialMenu) {
            this.toggleBtn.addEventListener('click', () => this.toggleMenu());
            
            // Auto-hide on mobile
            window.addEventListener('resize', () => this.handleResize());
        }
    }
    
    toggleMenu() {
        document.body.classList.toggle('menu-active');
        
        if (document.body.classList.contains('menu-active')) {
            this.autoHide();
        }
    }
    
    autoHide() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        
        this.hideTimeout = setTimeout(() => {
            document.body.classList.remove('menu-active');
        }, 6000);
    }
    
    handleResize() {
        clearTimeout(this.hideTimeout);
        document.body.classList.remove('menu-active');
    }
}

// =============================================================================
// MAIN APPLICATION INITIALIZATION
// =============================================================================

class PortfolioApp {
    constructor() {
        this.components = {};
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents() {
        try {
            // Initialize core components
            this.components.typewriter = new TypewriterEffect('typewriter', CONFIG.typewriter.phrases);
            this.components.modal = new ModalManager();
            this.components.navigation = new NavigationManager();
            this.components.loading = new LoadingManager();
            this.components.socialMenu = new SocialMenuManager();
            
            // Initialize lucide icons if available
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
            
            // Initialize AOS if available
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,
                    once: true
                });
            }
            
            console.log('Portfolio app initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio app:', error);
        }
    }
    
    // Method to reinitialize components if needed
    reinitialize() {
        this.initializeComponents();
    }
}

// =============================================================================
// AUTO-INITIALIZATION
// =============================================================================

// Initialize the application
const portfolioApp = new PortfolioApp();

// Make it globally accessible for debugging
window.portfolioApp = portfolioApp;
