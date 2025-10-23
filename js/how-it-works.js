// How It Works page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize how it works animations
    initializeHowItWorksAnimations();
    
    // Set up interactive elements
    setupHowItWorksInteractions();
    
    // Start process animations
    startProcessAnimations();
});

function initializeHowItWorksAnimations() {
    // Animate process flow
    const processFlow = document.querySelector('.process-flow');
    if (processFlow) {
        const flowSteps = processFlow.querySelectorAll('.flow-step');
        flowSteps.forEach((step, index) => {
            setTimeout(() => {
                addLoadingAnimation(step);
            }, index * 300);
        });
    }
    
    // Animate detailed steps
    const detailedSteps = document.querySelectorAll('.step-detailed');
    detailedSteps.forEach((step, index) => {
        setTimeout(() => {
            addLoadingAnimation(step);
        }, index * 400);
    });
    
    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            addLoadingAnimation(card);
        }, index * 150);
    });
    
    // Animate tech items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            addLoadingAnimation(item);
        }, index * 200);
    });
}

function setupHowItWorksInteractions() {
    // Add hover effects to flow steps
    document.querySelectorAll('.flow-step').forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'rgba(0, 191, 255, 0.2)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(0, 191, 255, 0.1)';
        });
    });
    
    // Add click effects to detailed steps
    document.querySelectorAll('.step-detailed').forEach(step => {
        step.addEventListener('click', function() {
            // Animate the step visual
            const visual = this.querySelector('.step-visual');
            if (visual) {
                visual.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    visual.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
    
    // Add interactive feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.filter = 'grayscale(0) brightness(1)';
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.filter = 'grayscale(1) brightness(0.8)';
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

function startProcessAnimations() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            bar.style.width = Math.min(progress, 100) + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    bar.style.width = '0%';
                    startProcessAnimations();
                }, 2000);
            }
        }, 100);
    });
    
    // Animate step overlays
    const stepOverlays = document.querySelectorAll('.step-overlay');
    stepOverlays.forEach(overlay => {
        const parent = overlay.parentElement;
        parent.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
        });
        
        parent.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
        });
    });
    
    // Animate security indicators
    const securityIndicators = document.querySelectorAll('.security-indicators');
    securityIndicators.forEach(indicator => {
        const icon = indicator.querySelector('.security-icon');
        const text = indicator.querySelector('.security-text');
        
        if (icon && text) {
            setInterval(() => {
                icon.style.transform = 'scale(1.2)';
                text.style.color = '#FF00AA';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                    text.style.color = '#00BFFF';
                }, 500);
            }, 3000);
        }
    });
}

// Add scroll-triggered animations
const howItWorksObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger specific animations based on element type
            if (entry.target.classList.contains('step-detailed')) {
                animateStepDetailed(entry.target);
            } else if (entry.target.classList.contains('feature-card')) {
                animateFeatureCard(entry.target);
            } else if (entry.target.classList.contains('tech-item')) {
                animateTechItem(entry.target);
            }
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.step-detailed, .feature-card, .tech-item');
    animateElements.forEach(el => howItWorksObserver.observe(el));
});

function animateStepDetailed(step) {
    const header = step.querySelector('.step-header');
    const visual = step.querySelector('.step-visual');
    const description = step.querySelector('.step-description');
    
    if (header) {
        header.style.transform = 'translateX(-30px)';
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.transform = 'translateX(0)';
            header.style.opacity = '1';
        }, 200);
    }
    
    if (visual) {
        visual.style.transform = 'scale(0.8)';
        visual.style.opacity = '0';
        setTimeout(() => {
            visual.style.transform = 'scale(1)';
            visual.style.opacity = '1';
        }, 400);
    }
    
    if (description) {
        description.style.transform = 'translateX(30px)';
        description.style.opacity = '0';
        setTimeout(() => {
            description.style.transform = 'translateX(0)';
            description.style.opacity = '1';
        }, 600);
    }
}

function animateFeatureCard(card) {
    const icon = card.querySelector('.feature-icon');
    const title = card.querySelector('h3');
    const text = card.querySelector('p');
    const details = card.querySelector('.feature-details');
    
    if (icon) {
        icon.style.transform = 'rotate(-180deg)';
        icon.style.opacity = '0';
        setTimeout(() => {
            icon.style.transform = 'rotate(0deg)';
            icon.style.opacity = '1';
        }, 200);
    }
    
    if (title) {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.transform = 'translateY(0)';
            title.style.opacity = '1';
        }, 400);
    }
    
    if (text) {
        text.style.transform = 'translateY(20px)';
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.transform = 'translateY(0)';
            text.style.opacity = '1';
        }, 600);
    }
    
    if (details) {
        details.style.transform = 'translateY(20px)';
        details.style.opacity = '0';
        setTimeout(() => {
            details.style.transform = 'translateY(0)';
            details.style.opacity = '1';
        }, 800);
    }
}

function animateTechItem(item) {
    const icon = item.querySelector('.tech-icon');
    const title = item.querySelector('h3');
    const specs = item.querySelector('.tech-specs');
    
    if (icon) {
        icon.style.transform = 'scale(0)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    }
    
    if (title) {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.transform = 'translateY(0)';
            title.style.opacity = '1';
        }, 400);
    }
    
    if (specs) {
        const specItems = specs.querySelectorAll('.spec');
        specItems.forEach((spec, index) => {
            spec.style.transform = 'translateX(-20px)';
            spec.style.opacity = '0';
            setTimeout(() => {
                spec.style.transform = 'translateX(0)';
                spec.style.opacity = '1';
            }, 600 + (index * 100));
        });
    }
}

// Add interactive process flow
document.querySelectorAll('.flow-step').forEach(step => {
    step.addEventListener('click', function() {
        // Highlight this step and dim others
        const allSteps = document.querySelectorAll('.flow-step');
        allSteps.forEach(s => {
            s.style.opacity = '0.5';
            s.style.transform = 'scale(0.9)';
        });
        
        this.style.opacity = '1';
        this.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            allSteps.forEach(s => {
                s.style.opacity = '1';
                s.style.transform = 'scale(1)';
            });
        }, 2000);
    });
});

// Add interactive tech specs
document.querySelectorAll('.spec').forEach(spec => {
    spec.addEventListener('click', function() {
        // Add highlight effect
        this.style.background = 'rgba(0, 191, 255, 0.2)';
        this.style.borderColor = '#00BFFF';
        
        setTimeout(() => {
            this.style.background = 'rgba(0, 191, 255, 0.1)';
            this.style.borderColor = 'rgba(0, 191, 255, 0.2)';
        }, 1000);
    });
});

// Add terminal typing effect for step prompts
function typeStepPrompt(element, text, speed = 100) {
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

// Initialize terminal prompts
document.addEventListener('DOMContentLoaded', function() {
    const terminalPrompts = document.querySelectorAll('.terminal-prompt .prompt-text');
    terminalPrompts.forEach(prompt => {
        const originalText = prompt.textContent;
        setTimeout(() => {
            typeStepPrompt(prompt, originalText, 50);
        }, 1000);
    });
});

// Add progress bar animations
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        if (fill) {
            let width = 0;
            const interval = setInterval(() => {
                width += Math.random() * 10;
                fill.style.width = Math.min(width, 100) + '%';
                
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        fill.style.width = '0%';
                        animateProgressBars();
                    }, 2000);
                }
            }, 100);
        }
    });
}

// Start progress bar animations
window.addEventListener('load', function() {
    setTimeout(animateProgressBars, 2000);
});
