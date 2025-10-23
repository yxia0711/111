// Home page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize home page animations
    initializeHomeAnimations();
    
    // Set up interactive elements
    setupInteractiveElements();
    
    // Start data simulation
    startDataSimulation();
});

function initializeHomeAnimations() {
    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            addLoadingAnimation(card);
        }, index * 200);
    });
    
    // Animate stats
    animateStats();
    
    // Animate testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            addLoadingAnimation(testimonial);
        }, index * 300);
    });
}

function setupInteractiveElements() {
    // Set up vault button
    const vaultButton = document.querySelector('.vault-button');
    if (vaultButton) {
        vaultButton.addEventListener('click', showMessage);
    }
    
    // Set up CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .vault-button, .cta-buttons .secondary-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
        });
    });
}

function showMessage() {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;
    
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

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isCurrency = finalValue.includes('$');
        const isTB = finalValue.includes('TB');
        
        let numericValue;
        if (isPercentage) {
            numericValue = parseFloat(finalValue);
        } else if (isCurrency) {
            numericValue = parseFloat(finalValue.replace('$', ''));
        } else if (isTB) {
            numericValue = parseFloat(finalValue);
        } else {
            numericValue = parseInt(finalValue);
        }
        
        animateNumber(stat, 0, numericValue, 2000, finalValue);
    });
}

function animateNumber(element, start, end, duration, originalText) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = start + (end - start) * easeOutCubic(progress);
        
        if (originalText.includes('%')) {
            element.textContent = Math.round(currentValue) + '%';
        } else if (originalText.includes('$')) {
            element.textContent = '$' + Math.round(currentValue);
        } else if (originalText.includes('TB')) {
            element.textContent = currentValue.toFixed(1) + 'TB';
        } else {
            element.textContent = Math.round(currentValue);
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function startDataSimulation() {
    // Simulate data upload progress
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
                    startDataSimulation();
                }, 2000);
            }
        }, 100);
    });
    
    // Animate data bars
    const dataBars = document.querySelectorAll('.data-bar');
    dataBars.forEach((bar, index) => {
        setTimeout(() => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.height = percentage + '%';
        }, index * 200);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const parallaxSpeed = 0.5;
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Simulate real-time data updates
function simulateRealTimeData() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const originalValue = metric.textContent;
        const interval = setInterval(() => {
            // Add small random variations to simulate real-time updates
            if (originalValue.includes('M+')) {
                const baseValue = parseFloat(originalValue);
                const variation = (Math.random() - 0.5) * 0.1;
                metric.textContent = (baseValue + variation).toFixed(1) + 'M+';
            }
        }, 5000);
    });
}

// Start real-time simulation after page load
window.addEventListener('load', function() {
    setTimeout(simulateRealTimeData, 2000);
});
