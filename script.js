// LynfeirLinks - Ultra Premium JavaScript
// By Hunter Weeks

class LynfeirLinks {
    constructor() {
        this.initializeElements();
        this.initializeState();
        this.bindEvents();
        this.initializeAnimations();
        this.startApp();
    }

    initializeElements() {
        // Navigation
        this.nav = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Hero
        this.heroSection = document.getElementById('hero');
        this.statValues = document.querySelectorAll('.stat-value');
        
        // Theme
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        
        // Modal
        this.modal = document.getElementById('contactModal');
        this.modalClose = document.getElementById('modalClose');
        this.contactForm = document.getElementById('contactForm');
        
        // CTAs
        this.ctaButtons = document.querySelectorAll('#navCTA, #heroCTA, #heroContact, #finalCTA');
        
        // Toast
        this.toast = document.getElementById('toast');
        
        // Cursor
        this.cursor = document.getElementById('cursor');
        this.cursorDot = this.cursor?.querySelector('.cursor-dot');
        this.cursorOutline = this.cursor?.querySelector('.cursor-outline');
        
        // Testimonials
        this.testimonialCards = document.querySelectorAll('.testimonial-card');
        this.testimonialPrev = document.getElementById('testimonialPrev');
        this.testimonialNext = document.getElementById('testimonialNext');
        
        // Portfolio
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Preloader
        this.preloader = document.getElementById('preloader');
        this.loadingPercentage = document.querySelector('.loading-percentage');
    }

    initializeState() {
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.currentTestimonial = 0;
        this.activeFilter = 'all';
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.particles = [];
        this.isMenuOpen = false;
        this.theme = localStorage.getItem('theme') || 'dark';
    }

    bindEvents() {
        // Window events
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('load', this.handleLoad.bind(this));
        
        // Navigation
        this.navToggle?.addEventListener('click', this.toggleMobileMenu.bind(this));
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
        
        // Theme toggle
        this.themeToggle?.addEventListener('click', this.toggleTheme.bind(this));
        
        // Modal
        this.ctaButtons.forEach(btn => {
            if (btn.id === 'heroCTA') {
                btn.addEventListener('click', () => {
                    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                });
            } else {
                btn.addEventListener('click', this.openModal.bind(this));
            }
        });
        
        this.modalClose?.addEventListener('click', this.closeModal.bind(this));
        this.modal?.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeModal();
            }
        });
        
        // Form
        this.contactForm?.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.setupFormValidation();
        
        // Testimonials
        this.testimonialPrev?.addEventListener('click', this.prevTestimonial.bind(this));
        this.testimonialNext?.addEventListener('click', this.nextTestimonial.bind(this));
        
        // Portfolio filters
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', this.handleFilterClick.bind(this));
        });
        
        // Cursor (desktop only)
        if (window.matchMedia('(hover: hover)').matches) {
            document.addEventListener('mousemove', this.handleMouseMove.bind(this));
            this.setupCursorEffects();
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    initializeAnimations() {
        // Set up intersection observer for scroll animations
        this.setupIntersectionObserver();
        
        // Initialize particle system
        this.initParticleSystem();
        
        // Start number animations when visible
        this.setupNumberAnimations();
        
        // Initialize typing animation
        this.initTypingAnimation();
        
        // Set initial theme
        this.applyTheme(this.theme);
    }

    startApp() {
        // Hide preloader after content loads
        setTimeout(() => {
            this.hidePreloader();
        }, 2000);
        
        // Start animations
        this.animateHeroElements();
        
        // Auto-rotate testimonials
        this.startTestimonialRotation();
    }

    // Preloader
    hidePreloader() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            if (this.loadingPercentage) {
                this.loadingPercentage.textContent = `${progress}%`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                this.preloader?.classList.add('hidden');
                setTimeout(() => {
                    if (this.preloader) {
                        this.preloader.style.display = 'none';
                    }
                }, 500);
            }
        }, 50);
    }

    // Scroll handling
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Update navigation
        if (scrollY > 50) {
            this.nav?.classList.add('scrolled');
        } else {
            this.nav?.classList.remove('scrolled');
        }
        
        // Parallax effects
        this.updateParallax(scrollY);
        
        // Update active nav link
        this.updateActiveNavLink();
    }

    updateParallax(scrollY) {
        // Hero parallax
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        
        // Background parallax
        const heroBg = document.querySelector('.hero-gradient');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Navigation
    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.navMenu?.classList.toggle('active');
        this.navToggle?.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (this.isMenuOpen) {
            this.body.style.overflow = 'hidden';
        } else {
            this.body.style.overflow = '';
        }
    }

    handleNavClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Close mobile menu if open
                if (this.isMenuOpen) {
                    this.toggleMobileMenu();
                }
                
                // Smooth scroll to section
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Theme toggle
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.theme);
        localStorage.setItem('theme', this.theme);
    }

    applyTheme(theme) {
        if (theme === 'light') {
            this.body.classList.add('light-theme');
            if (this.themeToggle) {
                this.themeToggle.querySelector('.theme-icon').textContent = '☀️';
            }
        } else {
            this.body.classList.remove('light-theme');
            if (this.themeToggle) {
                this.themeToggle.querySelector('.theme-icon').textContent = '🌙';
            }
        }
    }

    // Modal
    openModal() {
        this.modal?.classList.add('active');
        this.body.style.overflow = 'hidden';
        
        // Focus first input
        setTimeout(() => {
            const firstInput = this.modal?.querySelector('input');
            firstInput?.focus();
        }, 300);
    }

    closeModal() {
        this.modal?.classList.remove('active');
        this.body.style.overflow = '';
    }

    // Form handling
    setupFormValidation() {
        const inputs = this.contactForm?.querySelectorAll('input, select, textarea');
        inputs?.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup?.querySelector('.form-error');
        
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        if (!isValid && formGroup && errorElement) {
            formGroup.classList.add('error');
            errorElement.textContent = errorMessage;
        }
        
        return isValid;
    }

    clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup?.querySelector('.form-error');
        
        if (formGroup && errorElement) {
            formGroup.classList.remove('error');
            errorElement.textContent = '';
        }
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const inputs = this.contactForm.querySelectorAll('input, select, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Get form data
        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual endpoint)
            await this.simulateApiCall(data);
            
            // Success
            this.showToast('Message sent successfully! I\'ll get back to you soon.');
            this.contactForm.reset();
            this.closeModal();
        } catch (error) {
            this.showToast('Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    simulateApiCall(data) {
        return new Promise((resolve) => {
            console.log('Form data:', data);
            setTimeout(resolve, 2000);
        });
    }

    showToast(message, type = 'success') {
        if (this.toast) {
            const toastMessage = this.toast.querySelector('.toast-message');
            if (toastMessage) {
                toastMessage.textContent = message;
            }
            
            if (type === 'error') {
                this.toast.style.background = 'var(--danger)';
            } else {
                this.toast.style.background = 'var(--success)';
            }
            
            this.toast.classList.add('show');
            
            setTimeout(() => {
                this.toast.classList.remove('show');
            }, 5000);
        }
    }

    // Testimonials
    prevTestimonial() {
        this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonialCards.length) % this.testimonialCards.length;
        this.updateTestimonial();
    }

    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonialCards.length;
        this.updateTestimonial();
    }

    updateTestimonial() {
        this.testimonialCards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentTestimonial);
        });
    }

    startTestimonialRotation() {
        setInterval(() => {
            this.nextTestimonial();
        }, 5000);
    }

    // Portfolio filters
    handleFilterClick(e) {
        const filter = e.target.dataset.filter;
        
        // Update active button
        this.filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        // Filter items
        this.portfolioItems.forEach(item => {
            const category = item.dataset.category;
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Cursor effects
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    setupCursorEffects() {
        if (!this.cursor) return;
        
        // Smooth cursor animation
        const animateCursor = () => {
            this.cursorX += (this.mouseX - this.cursorX) * 0.1;
            this.cursorY += (this.mouseY - this.cursorY) * 0.1;
            
            if (this.cursor) {
                this.cursor.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
            }
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
        
        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.body.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                this.body.classList.remove('cursor-hover');
            });
        });
    }

    // Particle system
    initParticleSystem() {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Create particles
        const particleCount = window.innerWidth > 768 ? 50 : 20;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
                ctx.fill();
                
                // Draw connections
                this.particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${(150 - distance) / 150 * 0.1})`;
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('service-card')) {
                        this.animateServiceCard(entry.target);
                    } else if (entry.target.classList.contains('process-step')) {
                        this.animateProcessStep(entry.target);
                    }
                }
            });
        }, options);
        
        // Observe elements
        const elementsToObserve = document.querySelectorAll(
            '.reveal, .reveal-scale, .service-card, .portfolio-item, .process-step'
        );
        
        elementsToObserve.forEach(el => {
            el.classList.add(el.classList.contains('service-card') ? 'reveal-scale' : 'reveal');
            observer.observe(el);
        });
    }

    animateServiceCard(card) {
        const delay = Array.from(card.parentElement.children).indexOf(card) * 100;
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, delay);
    }

    animateProcessStep(step) {
        const delay = Array.from(step.parentElement.children).indexOf(step) * 150;
        setTimeout(() => {
            step.style.transform = 'translateX(0)';
            step.style.opacity = '1';
        }, delay);
    }

    // Number animations
    setupNumberAnimations() {
        const animateNumber = (element, target, duration = 2000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const update = () => {
                current += increment;
                if (current >= target) {
                    current = target;
                    element.textContent = Math.round(target);
                } else {
                    element.textContent = Math.round(current);
                    requestAnimationFrame(update);
                }
            };
            
            update();
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const target = parseInt(entry.target.dataset.value);
                    animateNumber(entry.target, target);
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.5 });
        
        this.statValues.forEach(stat => observer.observe(stat));
    }

    // Typing animation
    initTypingAnimation() {
        const codeEditor = document.querySelector('.code-editor');
        if (!codeEditor) return;
        
        const code = codeEditor.querySelector('code');
        if (!code) return;
        
        // Store original content
        const originalContent = code.innerHTML;
        
        // Clear content initially
        code.style.opacity = '0';
        
        // Wait for hero to be visible
        setTimeout(() => {
            code.style.opacity = '1';
            code.innerHTML = originalContent;
        }, 1500);
    }

    // Hero animations
    animateHeroElements() {
        // Stagger animations for hero elements
        const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Keyboard navigation
    handleKeydown(e) {
        // Close modal on Escape
        if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
            this.closeModal();
        }
        
        // Navigate testimonials with arrow keys
        if (e.key === 'ArrowLeft' && document.activeElement.closest('.testimonials')) {
            this.prevTestimonial();
        }
        if (e.key === 'ArrowRight' && document.activeElement.closest('.testimonials')) {
            this.nextTestimonial();
        }
    }

    // Window resize handler
    handleResize() {
        // Update mobile menu state
        if (window.innerWidth > 768 && this.isMenuOpen) {
            this.toggleMobileMenu();
        }
        
        // Recalculate particle canvas size
        const canvas = document.getElementById('particleCanvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    // Window load handler
    handleLoad() {
        // Remove no-js class if present
        document.documentElement.classList.remove('no-js');
        
        // Initialize animations that depend on loaded content
        this.setupNumberAnimations();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new LynfeirLinks();
    
    // Expose app instance for debugging
    window.lynfeirLinks = app;
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.error('Service Worker registration failed:', err));
    });
}

// Performance monitoring
window.addEventListener('load', () => {
    // Log performance metrics
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        
        console.log(`
            🚀 Performance Metrics:
            Page Load Time: ${pageLoadTime}ms
            Connect Time: ${connectTime}ms
            Render Time: ${renderTime}ms
        `);
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = (target, duration = 1000) => {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
    };
    
    // Override default anchor behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) smoothScroll(target);
        });
    });
}

// Lazy loading for images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Advanced hover effects for project cards
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// Enhanced button interactions
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            width: 100px;
            height: 100px;
            left: ${x - 50}px;
            top: ${y - 50}px;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation if not exists
if (!document.querySelector('#rippleAnimation')) {
    const style = document.createElement('style');
    style.id = 'rippleAnimation';
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Form field animations
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // Add filled class if field has value on load
    if (field.value) {
        field.parentElement.classList.add('focused');
    }
});

// Magnetic button effect
document.querySelectorAll('.nav-cta, .cta-btn.mega').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Text scramble effect for hero title
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }
        
        this.el.innerText = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply text scramble to hero title on load
window.addEventListener('load', () => {
    const titleWords = document.querySelectorAll('.hero-title .title-word');
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            const scrambler = new TextScramble(word);
            const originalText = word.innerText;
            word.innerText = '';
            scrambler.setText(originalText);
        }, 2000 + (index * 200));
    });
});

// Parallax tilt effect for cards
class ParallaxTilt {
    constructor(element) {
        this.element = element;
        this.init();
    }
    
    init() {
        this.element.addEventListener('mousemove', this.handleMove.bind(this));
        this.element.addEventListener('mouseenter', this.handleEnter.bind(this));
        this.element.addEventListener('mouseleave', this.handleLeave.bind(this));
    }
    
    handleMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.element.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    }
    
    handleEnter() {
        this.element.style.transition = 'transform 0.15s ease-out';
    }
    
    handleLeave() {
        this.element.style.transition = 'transform 0.6s ease-out';
        this.element.style.transform = '';
    }
}

// Apply parallax tilt to cards
document.querySelectorAll('.service-card').forEach(card => {
    new ParallaxTilt(card);
});

// Console Easter Egg
console.log('%c🚀 Welcome to LynfeirLinks!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cHandcrafted with ❤️ by Hunter Weeks', 'font-size: 14px; color: #8b5cf6;');
console.log('%cInterested in working together? Email me at hunter@lynfeirlinks.com', 'font-size: 12px; color: #a1a1aa;');