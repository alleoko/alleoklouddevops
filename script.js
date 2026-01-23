// DevOps Portfolio JavaScript

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Add active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Call once on load
}

// Add scroll-to-top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<iconify-icon icon="mdi:arrow-up"></iconify-icon>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--brand-orange);
        color: white;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    }
    
    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', toggleScrollButton);
}

// Add typing animation for hero text
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--brand-orange)';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 500);
}

// Add fade-in animation for cards on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add project modal functionality
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const demoButton = card.querySelector('.btn-demo');
        const codeButton = card.querySelector('.btn-code');
        
        if (demoButton) {
            demoButton.addEventListener('click', (e) => {
                e.preventDefault();
                showProjectModal(card);
            });
        }
        
        if (codeButton) {
            codeButton.addEventListener('click', (e) => {
                e.preventDefault();
                // In a real implementation, this would open the GitHub repository
                window.open('#', '_blank');
            });
        }
    });
}

function showProjectModal(projectCard) {
    const title = projectCard.querySelector('h3').textContent;
    const description = projectCard.querySelector('p').textContent;
    const image = projectCard.querySelector('img').src;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="
            background-color: var(--brand-dark);
            border: 1px solid var(--brand-border);
            border-radius: 1.5rem;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            position: relative;
        ">
            <button class="modal-close" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            ">&times;</button>
            <img src="${image}" alt="${title}" style="
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 1rem;
                margin-bottom: 1rem;
            ">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">${title}</h3>
            <p style="color: var(--brand-gray); margin-bottom: 1rem;">${description}</p>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-primary">View Live Demo</button>
                <button class="btn-outline">View Source Code</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fade in modal
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Add contact form functionality
function initContactForm() {
    const contactButton = document.querySelector('#contact .btn-primary');
    
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            // In a real implementation, this would open a contact form or email client
            const email = 'devops@example.com';
            const subject = 'DevOps Consultation Inquiry';
            const body = 'Hi, I would like to discuss a DevOps project with you.';
            
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
}

// Add mobile menu functionality
function initMobileMenu() {
    // Create mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<iconify-icon icon="mdi:menu"></iconify-icon>';
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    `;
    
    // Add mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 1279px) {
            .mobile-menu-button {
                display: block !important;
            }
            
            nav .hidden {
                display: none !important;
            }
            
            .mobile-nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: var(--brand-dark);
                border: 1px solid var(--brand-border);
                border-radius: 1rem;
                padding: 1rem;
                display: none;
                flex-direction: column;
                gap: 1rem;
            }
            
            .mobile-nav.active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add button to nav
    const nav = document.querySelector('nav > div');
    nav.appendChild(mobileMenuButton);
    
    // Create mobile navigation menu
    //const mobileNav = document.createElement('div');
    //mobileNav.className = 'mobile-nav';
    //mobileNav.innerHTML = `
    //    <a href="#about">About</a>
    //    <a href="#skills">Skills</a>
    //    <a href="#projects">Projects</a>
    //    <a href="#contact">Contact</a>
    //`;
    
    nav.appendChild(mobileNav);
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initActiveNavigation();
    initScrollToTop();
    initScrollAnimations();
    initProjectModals();
    initContactForm();
    initMobileMenu();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add performance optimizations
window.addEventListener('load', function() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Export functions for global access
window.DevOpsPortfolio = {
    scrollToSection,
    initSmoothScrolling,
    initActiveNavigation,
    initScrollToTop,
    initScrollAnimations,
    initProjectModals,
    initContactForm,
    initMobileMenu
};