// Animation Controller
class AnimationController {
    constructor() {
        this.animatedElements = [];
        this.init();
    }

    init() {
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Initialize entrance animations
        this.initEntranceAnimations();
        
        // Initialize interactive animations
        this.initInteractiveAnimations();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        const scrollElements = document.querySelectorAll('.feature-card, .benefit-item, .story-content');
        scrollElements.forEach(element => {
            observer.observe(element);
        });
    }

    initEntranceAnimations() {
        // Hero section entrance animation
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroCta = document.querySelector('.hero-cta');

        if (heroTitle) {
            setTimeout(() => {
                heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
            }, 500);
        }

        if (heroSubtitle) {
            setTimeout(() => {
                heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');
            }, 800);
        }

        if (heroCta) {
            setTimeout(() => {
                heroCta.classList.add('animate__animated', 'animate__fadeInUp');
            }, 1100);
        }
    }

    initInteractiveAnimations() {
        // Feature card hover animations
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addHoverAnimation(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeHoverAnimation(card);
            });
        });

        // Button click animations
        const buttons = document.querySelectorAll('.submit-btn, .lang-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.addClickAnimation(e.target);
            });
        });

        // Form input focus animations
        const inputs = document.querySelectorAll('input[type="email"]');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.addFocusAnimation(input);
            });

            input.addEventListener('blur', () => {
                this.removeFocusAnimation(input);
            });
        });
    }

    animateElement(element) {
        // Add entrance animation based on element type
        if (element.classList.contains('feature-card')) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        } else if (element.classList.contains('benefit-item')) {
            element.classList.add('animate__animated', 'animate__fadeInLeft');
        } else if (element.classList.contains('story-content')) {
            element.classList.add('animate__animated', 'animate__fadeIn');
        }
    }

    addHoverAnimation(element) {
        element.style.transform = 'translateY(-10px) scale(1.02)';
        element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    }

    removeHoverAnimation(element) {
        element.style.transform = '';
        element.style.boxShadow = '';
    }

    addClickAnimation(element) {
        element.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            element.classList.remove('animate__animated', 'animate__pulse');
        }, 600);
    }

    addFocusAnimation(element) {
        element.style.transform = 'scale(1.02)';
        element.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.4)';
    }

    removeFocusAnimation(element) {
        element.style.transform = '';
        element.style.boxShadow = '';
    }
}

// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateParallax();
        });
    }

    updateParallax() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    }
}

// Loading Animation
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // Show loading screen
        this.showLoadingScreen();
        
        // Hide loading screen when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 1000);
        });
    }

    showLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p class="loading-text">Loading...</p>
            </div>
        `;
        document.body.appendChild(loadingScreen);

        // ローディング画面のスタイルを追加
        const style = document.createElement('style');
        style.textContent = `
            .loading-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%);
                background-size: 400% 400%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
                animation: gradientShift 8s ease infinite;
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .loading-content {
                text-align: center;
                color: white;
                position: relative;
            }

            .loading-spinner {
                width: 50px;
                height: 50px;
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite, pulse 2s infinite alternate;
                margin: 0 auto 20px;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
            }

            .loading-text {
                font-size: 1.2rem;
                font-weight: 300;
                color: var(--lightning-color, white);
                text-shadow: 
                    0 0 10px rgba(255, 255, 255, 0.3),
                    0 0 20px rgba(74, 144, 226, 0.5);
            }

            .loading-screen.fade-out {
                opacity: 0;
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }
}

// Form Message Animations
class FormMessageAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Add CSS for form messages
        this.addFormMessageStyles();
    }

    addFormMessageStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .form-message {
                margin-top: 15px;
                padding: 12px 20px;
                border-radius: 8px;
                font-weight: 500;
                animation: slideInUp 0.3s ease-out;
            }
            
            .form-message-success {
                background: rgba(76, 175, 80, 0.1);
                color: #4caf50;
                border: 1px solid rgba(76, 175, 80, 0.3);
            }
            
            .form-message-error {
                background: rgba(244, 67, 54, 0.1);
                color: #f44336;
                border: 1px solid rgba(244, 67, 54, 0.3);
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Performance Optimized Animations
class PerformanceOptimizedAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Use requestAnimationFrame for smooth animations
        this.optimizeAnimations();
        
        // Reduce motion for accessibility
        this.handleReducedMotion();
    }

    optimizeAnimations() {
        // Use transform instead of changing layout properties
        const animatedElements = document.querySelectorAll('.feature-card, .benefit-item');
        animatedElements.forEach(element => {
            element.style.willChange = 'transform';
        });
    }

    handleReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            // Disable animations for users who prefer reduced motion
            document.body.classList.add('reduced-motion');
        }
    }
}

// Initialize all animations when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    const animationController = new AnimationController();
    const parallaxEffect = new ParallaxEffect();
    const loadingAnimation = new LoadingAnimation();
    const formMessageAnimations = new FormMessageAnimations();
    const performanceOptimizedAnimations = new PerformanceOptimizedAnimations();
});

// Add CSS for loading screen
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    }
    
    .loading-screen.fade-out {
        opacity: 0;
    }
    
    .loading-content {
        text-align: center;
        color: white;
    }
    
    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }
    
    .loading-text {
        font-size: 1.2rem;
        font-weight: 500;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
`;
document.head.appendChild(loadingStyles); 