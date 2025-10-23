// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all sections and nav links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to target section and nav link
            document.getElementById(targetId).classList.add('active');
            this.classList.add('active');
            
            // Add glitch effect to navigation
            this.classList.add('glitch');
            setTimeout(() => this.classList.remove('glitch'), 300);
        });
    });
});

// Home page functionality
function showMessage() {
    const terminalOutput = document.getElementById('terminal-output');
    const messages = [
        '> Initializing vault access...',
        '> Scanning digital footprint...',
        '> Uploading data...',
        '> Access granted.',
        '> Welcome to The Data Vault.'
    ];
    
    let messageIndex = 0;
    terminalOutput.classList.add('show');
    
    function displayNextMessage() {
        if (messageIndex < messages.length) {
            terminalOutput.innerHTML = `<span class="prompt-cursor">></span><span class="prompt-text">${messages[messageIndex]}</span>`;
            messageIndex++;
            setTimeout(displayNextMessage, 1000);
        }
    }
    
    displayNextMessage();
}

// Registration form functionality
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate form processing
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span class="button-text">PROCESSING...</span>';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show access granted message
        const accessMessage = document.getElementById('access-message');
        accessMessage.classList.add('show');
        
        // Add glitch effect to the form
        this.classList.add('glitch');
        setTimeout(() => this.classList.remove('glitch'), 500);
        
        // Scroll to the message
        accessMessage.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// Add random glitch effects to various elements
function addRandomGlitch() {
    const elements = document.querySelectorAll('.pixel-text, .section-title, .main-title');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    randomElement.classList.add('glitch');
    setTimeout(() => randomElement.classList.remove('glitch'), 300);
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
document.querySelectorAll('.vault-button, .submit-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add loading animation to steps
function animateSteps() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(20px)';
            step.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Animate steps when How It Works section is active
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'how-it-works') {
            animateSteps();
        }
    });
}, { threshold: 0.5 });

setTimeout(() => {
    observer.observe(document.getElementById('how-it-works'));
}, 100);

// Add pixelated image effects
document.querySelectorAll('.pixel-image').forEach(img => {
    img.addEventListener('load', function() {
        this.style.imageRendering = 'pixelated';
        this.style.filter = 'contrast(1.2) brightness(0.8) saturate(1.5)';
    });
});

// Simulate data upload progress
function simulateDataUpload() {
    const progressBars = document.querySelectorAll('.loading-progress');
    progressBars.forEach(bar => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            bar.style.width = Math.min(progress, 100) + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    bar.style.width = '0%';
                    simulateDataUpload();
                }, 2000);
            }
        }, 100);
    });
}

// Start data upload simulation
simulateDataUpload();

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

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.pixel-grid');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add terminal typing effect
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
