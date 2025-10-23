// Join page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize join page animations
    initializeJoinAnimations();
    
    // Set up interactive elements
    setupJoinInteractions();
    
    // Start join page effects
    startJoinEffects();
});

function initializeJoinAnimations() {
    // Animate vault door
    const vaultDoor = document.querySelector('.vault-door');
    if (vaultDoor) {
        setTimeout(() => {
            addLoadingAnimation(vaultDoor);
        }, 500);
    }
    
    // Animate pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        setTimeout(() => {
            addLoadingAnimation(card);
        }, index * 200);
    });
    
    // Animate form elements
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            addLoadingAnimation(group);
        }, index * 150);
    });
    
    // Animate testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            addLoadingAnimation(testimonial);
        }, index * 200);
    });
    
    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        setTimeout(() => {
            addLoadingAnimation(item);
        }, index * 100);
    });
}

function setupJoinInteractions() {
    // Set up pricing plan selection
    window.selectPlan = function(planType) {
        const planSelect = document.getElementById('plan');
        if (planSelect) {
            planSelect.value = planType;
            
            // Highlight selected plan
            const pricingCards = document.querySelectorAll('.pricing-card');
            pricingCards.forEach(card => {
                card.classList.remove('selected');
            });
            
            const selectedCard = document.querySelector(`[onclick="selectPlan('${planType}')"]`).closest('.pricing-card');
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }
        }
    };
    
    // Set up form submission
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Set up FAQ interactions
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = this.querySelector('.faq-toggle');
            
            // Close other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.display = 'none';
                    item.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current FAQ item
            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                answer.style.display = 'none';
                toggle.textContent = '+';
            } else {
                faqItem.classList.add('active');
                answer.style.display = 'block';
                toggle.textContent = '−';
            }
        });
    });
    
    // Add hover effects to pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const plan = document.getElementById('plan').value;
    const terms = document.getElementById('terms').checked;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (!terms) {
        alert('Please accept the Terms of Service and Privacy Policy!');
        return;
    }
    
    if (!plan) {
        alert('Please select a plan!');
        return;
    }
    
    // Simulate form processing
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span class="button-text">PROCESSING...</span>';
    submitButton.disabled = true;
    
    // Simulate processing time
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showSuccessMessage();
        
        // Add glitch effect to the form
        registrationForm.classList.add('glitch');
        setTimeout(() => registrationForm.classList.remove('glitch'), 500);
        
        // Scroll to success message
        const successSection = document.querySelector('.success-section');
        if (successSection) {
            successSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 2000);
}

function showSuccessMessage() {
    const accessMessage = document.getElementById('access-message');
    if (accessMessage) {
        accessMessage.classList.add('show');
        
        // Animate success elements
        setTimeout(() => {
            const checkmark = accessMessage.querySelector('.checkmark');
            if (checkmark) {
                checkmark.style.animation = 'checkmark-circle 0.6s ease-in-out, checkmark-check 0.6s ease-in-out 0.3s both';
            }
        }, 500);
        
        setTimeout(() => {
            const terminalOutput = accessMessage.querySelector('.terminal-output');
            if (terminalOutput) {
                terminalOutput.style.opacity = '1';
            }
        }, 1000);
        
        setTimeout(() => {
            const successDetails = accessMessage.querySelector('.success-details');
            if (successDetails) {
                addLoadingAnimation(successDetails);
            }
        }, 1500);
    }
}

function startJoinEffects() {
    // Animate vault door
    const doorHandle = document.querySelector('.door-handle');
    const doorLock = document.querySelector('.door-lock');
    
    if (doorHandle) {
        setInterval(() => {
            doorHandle.style.transform = 'translateY(-50%) scale(1.2)';
            setTimeout(() => {
                doorHandle.style.transform = 'translateY(-50%) scale(1)';
            }, 200);
        }, 3000);
    }
    
    if (doorLock) {
        setInterval(() => {
            doorLock.style.borderColor = '#FF00AA';
            setTimeout(() => {
                doorLock.style.borderColor = '#00BFFF';
            }, 500);
        }, 2000);
    }
    
    // Animate access indicator
    const indicatorLight = document.querySelector('.indicator-light');
    if (indicatorLight) {
        setInterval(() => {
            indicatorLight.style.background = '#FF00AA';
            setTimeout(() => {
                indicatorLight.style.background = '#00BFFF';
            }, 1000);
        }, 4000);
    }
    
    // Animate pricing card features
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 200);
        }, index * 100);
    });
}

// Add scroll-triggered animations
const joinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger specific animations based on element type
            if (entry.target.classList.contains('pricing-card')) {
                animatePricingCard(entry.target);
            } else if (entry.target.classList.contains('testimonial-card')) {
                animateTestimonialCard(entry.target);
            }
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.pricing-card, .testimonial-card');
    animateElements.forEach(el => joinObserver.observe(el));
});

function animatePricingCard(card) {
    const header = card.querySelector('.plan-header');
    const features = card.querySelector('.plan-features');
    const button = card.querySelector('.plan-button');
    
    if (header) {
        header.style.transform = 'translateY(-20px)';
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }, 200);
    }
    
    if (features) {
        features.style.transform = 'translateY(20px)';
        features.style.opacity = '0';
        setTimeout(() => {
            features.style.transform = 'translateY(0)';
            features.style.opacity = '1';
        }, 400);
    }
    
    if (button) {
        button.style.transform = 'scale(0)';
        button.style.opacity = '0';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.opacity = '1';
        }, 600);
    }
}

function animateTestimonialCard(card) {
    const content = card.querySelector('.testimonial-content');
    const author = card.querySelector('.testimonial-author');
    
    if (content) {
        content.style.transform = 'translateY(-20px)';
        content.style.opacity = '0';
        setTimeout(() => {
            content.style.transform = 'translateY(0)';
            content.style.opacity = '1';
        }, 200);
    }
    
    if (author) {
        author.style.transform = 'translateY(20px)';
        author.style.opacity = '0';
        setTimeout(() => {
            author.style.transform = 'translateY(0)';
            author.style.opacity = '1';
        }, 400);
    }
}

// Add interactive form elements
document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add interactive trust badges
document.querySelectorAll('.badge-item').forEach(badge => {
    badge.addEventListener('click', function() {
        // Add glow effect
        this.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.5)';
        this.style.borderColor = '#00BFFF';
        
        setTimeout(() => {
            this.style.boxShadow = '';
            this.style.borderColor = 'rgba(0, 191, 255, 0.3)';
        }, 1000);
    });
});

// Add interactive security indicators
document.querySelectorAll('.indicator-item').forEach(indicator => {
    indicator.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.indicator-icon');
        if (icon) {
            icon.style.filter = 'grayscale(0) brightness(1)';
            icon.style.transform = 'scale(1.2)';
        }
    });
    
    indicator.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.indicator-icon');
        if (icon) {
            icon.style.filter = 'grayscale(1) brightness(0.8)';
            icon.style.transform = 'scale(1)';
        }
    });
});

// Add interactive testimonials
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add glow effect
        this.style.boxShadow = '0 0 30px rgba(0, 191, 255, 0.5)';
        setTimeout(() => {
            this.style.boxShadow = '';
        }, 1000);
    });
});

// Add interactive FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderColor = '#00BFFF';
        this.style.background = 'rgba(0, 191, 255, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.borderColor = 'rgba(0, 191, 255, 0.3)';
            this.style.background = 'rgba(0, 191, 255, 0.05)';
        }
    });
});

// Add interactive action buttons
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
        }, 100);
    });
});

// Add interactive vault door
const vaultDoor = document.querySelector('.vault-door');
if (vaultDoor) {
    vaultDoor.addEventListener('click', function() {
        // Animate door opening
        const doorPanel = this.querySelector('.door-panel');
        const accessIndicator = this.querySelector('.access-indicator');
        
        doorPanel.style.transform = 'perspective(1000px) rotateY(-15deg)';
        accessIndicator.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            doorPanel.style.transform = 'perspective(1000px) rotateY(0deg)';
            accessIndicator.style.transform = 'scale(1)';
        }, 1000);
    });
}
