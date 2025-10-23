// Common JavaScript functionality for all pages

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set active navigation based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add glitch effect to navigation
            this.classList.add('glitch');
            setTimeout(() => this.classList.remove('glitch'), 300);
        });
    });
});

// Add random glitch effects to various elements
function addRandomGlitch() {
    const elements = document.querySelectorAll('.pixel-text, .section-title, .main-title');
    if (elements.length > 0) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        randomElement.classList.add('glitch');
        setTimeout(() => randomElement.classList.remove('glitch'), 300);
    }
}

// Add glitch effects every 5-10 seconds
setInterval(addRandomGlitch, Math.random() * 5000 + 5000);

// Terminal cursor blinking animation
function createBlinkingCursor() {
    const cursors = document.querySelectorAll('.prompt-cursor');
    cursors.forEach(cursor => {
        cursor.style.animation = 'blink 1s infinite';
    });
}

// Initialize cursor animation
createBlinkingCursor();

// Add hover effects to interactive elements
document.querySelectorAll('.vault-button, .submit-button, .plan-button, .action-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.pixel-grid');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const activeLink = document.querySelector('.nav-link.active');
        const links = Array.from(document.querySelectorAll('.nav-link'));
        const currentIndex = links.indexOf(activeLink);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % links.length;
        } else {
            nextIndex = (currentIndex - 1 + links.length) % links.length;
        }
        
        links[nextIndex].click();
    }
});

// Initialize terminal effects on page load
window.addEventListener('load', function() {
    // Add some initial terminal messages
    setTimeout(() => {
        const terminalOutputs = document.querySelectorAll('.terminal-output');
        terminalOutputs.forEach(output => {
            if (!output.classList.contains('show')) {
                output.style.opacity = '0.3';
            }
        });
    }, 1000);
});

// Utility function for typewriter effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Add loading animation to elements
function addLoadingAnimation(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .step-detailed');
    animateElements.forEach(el => observer.observe(el));
});
