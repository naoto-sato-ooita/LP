// Localization System
class Localization {
    constructor() {
        this.currentLang = 'en';
        this.translations = {};
        this.init();
    }

    async init() {
        try {
            // Load translations
            const [enTranslations, jaTranslations] = await Promise.all([
                fetch('locales/en.json').then(response => response.json()),
                fetch('locales/ja.json').then(response => response.json())
            ]);

            this.translations = {
                en: enTranslations,
                ja: jaTranslations
            };

            // Set initial language
            this.setLanguage(this.currentLang);
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }

    setLanguage(lang) {
        this.currentLang = lang;
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';

        // Update all translatable elements
        this.updateContent();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            const translation = this.getTranslation(key);
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }
}

// Form Handler
class FormHandler {
    constructor() {
        this.form = document.getElementById('emailForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        try {
            // Show loading state
            const submitBtn = this.form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Simulate API call (replace with actual endpoint)
            await this.submitEmail(email);

            // Show success message
            this.showMessage('Thank you! We\'ll notify you when the game is released.', 'success');
            emailInput.value = '';

        } catch (error) {
            this.showMessage('Something went wrong. Please try again.', 'error');
        } finally {
            // Reset button state
            const submitBtn = this.form.querySelector('.submit-btn');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async submitEmail(email) {
        // Simulate API call - replace with actual implementation
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 1000);
        });
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message form-message-${type}`;
        messageElement.textContent = message;
        
        // Insert after form
        this.form.parentNode.insertBefore(messageElement, this.form.nextSibling);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}

// Smooth Scrolling
class SmoothScrolling {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Performance Optimizer
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Preload critical resources
        this.preloadResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    preloadResources() {
        // Preload critical fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
}

// Analytics (Basic)
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track page views
        this.trackPageView();
        
        // Track form submissions
        this.trackFormSubmissions();
        
        // Track language changes
        this.trackLanguageChanges();
    }

    trackPageView() {
        // Basic page view tracking
        console.log('Page viewed:', window.location.href);
        
        // You can integrate with Google Analytics or other services here
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }

    trackFormSubmissions() {
        document.addEventListener('formSubmitted', (event) => {
            console.log('Form submitted:', event.detail);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'engagement',
                    event_label: 'email_signup'
                });
            }
        });
    }

    trackLanguageChanges() {
        document.addEventListener('languageChanged', (event) => {
            console.log('Language changed:', event.detail);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'language_change', {
                    event_category: 'engagement',
                    event_label: event.detail.language
                });
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize localization
    const localization = new Localization();
    
    // Initialize form handler
    const formHandler = new FormHandler();
    
    // Initialize smooth scrolling
    const smoothScrolling = new SmoothScrolling();
    
    // Initialize performance optimizer
    const performanceOptimizer = new PerformanceOptimizer();
    
    // Initialize analytics
    const analytics = new Analytics();
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            localization.setLanguage(lang);
            
            // Dispatch custom event for analytics
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
        });
    });
    
    // Form submission event listener
    document.addEventListener('formSubmitted', (event) => {
        // Dispatch custom event for analytics
        document.dispatchEvent(new CustomEvent('formSubmitted', {
            detail: event.detail
        }));
    });
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 