// About page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize about page animations
    initializeAboutAnimations();
    
    // Set up interactive elements
    setupAboutInteractions();
    
    // Start data visualization
    startDataVisualization();
});

function initializeAboutAnimations() {
    // Animate quote modules
    const quoteModules = document.querySelectorAll('.quote-module');
    quoteModules.forEach((module, index) => {
        setTimeout(() => {
            addLoadingAnimation(module);
        }, index * 300);
    });
    
    // Animate team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        setTimeout(() => {
            addLoadingAnimation(member);
        }, index * 200);
    });
    
    // Animate values
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        setTimeout(() => {
            addLoadingAnimation(card);
        }, index * 150);
    });
    
    // Animate crisis stats
    animateCrisisStats();
}

function setupAboutInteractions() {
    // Add hover effects to quote modules
    document.querySelectorAll('.quote-module').forEach(module => {
        module.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        module.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click effects to team members
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', function() {
            // Add glow effect
            this.style.boxShadow = '0 0 30px rgba(0, 191, 255, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 1000);
        });
    });
    
    // Add interactive data flow
    const dataFlow = document.querySelector('.data-flow');
    if (dataFlow) {
        dataFlow.addEventListener('click', function() {
            // Animate flow steps
            const flowSteps = this.querySelectorAll('.flow-step');
            flowSteps.forEach((step, index) => {
                setTimeout(() => {
                    step.style.transform = 'scale(1.1)';
                    step.style.background = 'rgba(0, 191, 255, 0.2)';
                    setTimeout(() => {
                        step.style.transform = 'scale(1)';
                        step.style.background = 'rgba(0, 191, 255, 0.1)';
                    }, 500);
                }, index * 200);
            });
        });
    }
}

function animateCrisisStats() {
    const crisisStats = document.querySelectorAll('.crisis-stat');
    crisisStats.forEach((stat, index) => {
        setTimeout(() => {
            addLoadingAnimation(stat);
            
            // Animate the bar
            const bar = stat.querySelector('.stat-bar');
            if (bar) {
                const height = bar.style.height;
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.height = height;
                }, 500);
            }
        }, index * 200);
    });
}

function startDataVisualization() {
    // Animate mission stats
    const missionStats = document.querySelectorAll('.mission-stats .stat');
    missionStats.forEach((stat, index) => {
        setTimeout(() => {
            const numberElement = stat.querySelector('.stat-number');
            if (numberElement) {
                animateStatNumber(numberElement);
            }
        }, index * 300);
    });
    
    // Simulate data flow animation
    const flowArrows = document.querySelectorAll('.flow-arrow');
    flowArrows.forEach(arrow => {
        setInterval(() => {
            arrow.style.transform = 'scale(1.2)';
            setTimeout(() => {
                arrow.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    });
}

function animateStatNumber(element) {
    const finalValue = element.textContent;
    let numericValue;
    
    if (finalValue.includes('M+')) {
        numericValue = parseFloat(finalValue);
    } else if (finalValue.includes('%')) {
        numericValue = parseFloat(finalValue);
    } else if (finalValue.includes('-bit')) {
        numericValue = parseInt(finalValue);
    } else {
        numericValue = parseFloat(finalValue);
    }
    
    animateNumber(element, 0, numericValue, 1500, finalValue);
}

function animateNumber(element, start, end, duration, originalText) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = start + (end - start) * easeOutCubic(progress);
        
        if (originalText.includes('M+')) {
            element.textContent = currentValue.toFixed(1) + 'M+';
        } else if (originalText.includes('%')) {
            element.textContent = Math.round(currentValue) + '%';
        } else if (originalText.includes('-bit')) {
            element.textContent = Math.round(currentValue) + '-bit';
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

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger specific animations based on element type
            if (entry.target.classList.contains('quote-module')) {
                animateQuoteModule(entry.target);
            } else if (entry.target.classList.contains('team-member')) {
                animateTeamMember(entry.target);
            } else if (entry.target.classList.contains('value-card')) {
                animateValueCard(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.quote-module, .team-member, .value-card, .crisis-stat');
    animateElements.forEach(el => aboutObserver.observe(el));
});

function animateQuoteModule(module) {
    const image = module.querySelector('.pixel-image');
    const quote = module.querySelector('.quote');
    
    if (image) {
        image.style.transform = 'scale(0.8)';
        image.style.opacity = '0';
        setTimeout(() => {
            image.style.transform = 'scale(1)';
            image.style.opacity = '1';
        }, 200);
    }
    
    if (quote) {
        quote.style.transform = 'translateX(-20px)';
        quote.style.opacity = '0';
        setTimeout(() => {
            quote.style.transform = 'translateX(0)';
            quote.style.opacity = '1';
        }, 400);
    }
}

function animateTeamMember(member) {
    const image = member.querySelector('.pixel-image');
    const info = member.querySelector('.member-info');
    
    if (image) {
        image.style.transform = 'scale(0)';
        setTimeout(() => {
            image.style.transform = 'scale(1)';
        }, 200);
    }
    
    if (info) {
        info.style.transform = 'translateY(20px)';
        info.style.opacity = '0';
        setTimeout(() => {
            info.style.transform = 'translateY(0)';
            info.style.opacity = '1';
        }, 400);
    }
}

function animateValueCard(card) {
    const icon = card.querySelector('.value-icon');
    const title = card.querySelector('h3');
    const text = card.querySelector('p');
    
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
}

// Add interactive crisis stats
document.querySelectorAll('.crisis-stat').forEach(stat => {
    stat.addEventListener('click', function() {
        const bar = this.querySelector('.stat-bar');
        if (bar) {
            // Add pulse effect
            bar.style.animation = 'none';
            setTimeout(() => {
                bar.style.animation = 'bar-grow 2s ease-in-out infinite';
            }, 100);
        }
    });
});

// Add hover effects to principles
document.querySelectorAll('.principle').forEach(principle => {
    principle.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.principle-icon');
        if (icon) {
            icon.style.filter = 'grayscale(0) brightness(1)';
            icon.style.transform = 'scale(1.2)';
        }
    });
    
    principle.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.principle-icon');
        if (icon) {
            icon.style.filter = 'grayscale(1) brightness(0.8)';
            icon.style.transform = 'scale(1)';
        }
    });
});
