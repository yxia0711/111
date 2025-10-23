// Security page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize security page animations
    initializeSecurityAnimations();
    
    // Set up interactive elements
    setupSecurityInteractions();
    
    // Start security visualizations
    startSecurityVisualizations();
});

function initializeSecurityAnimations() {
    // Animate security dashboard
    const dashboard = document.querySelector('.security-dashboard');
    if (dashboard) {
        setTimeout(() => {
            addLoadingAnimation(dashboard);
        }, 500);
    }
    
    // Animate bar chart
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.height = '0%';
            setTimeout(() => {
                bar.style.height = bar.getAttribute('style').match(/\d+%/)[0];
            }, 200);
        }, index * 200);
    });
    
    // Animate security features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            addLoadingAnimation(feature);
        }, index * 150);
    });
    
    // Animate compliance cards
    const complianceCards = document.querySelectorAll('.compliance-card');
    complianceCards.forEach((card, index) => {
        setTimeout(() => {
            addLoadingAnimation(card);
        }, index * 200);
    });
    
    // Animate threat stats
    animateThreatStats();
    
    // Animate audit timeline
    const auditItems = document.querySelectorAll('.audit-item');
    auditItems.forEach((item, index) => {
        setTimeout(() => {
            addLoadingAnimation(item);
        }, index * 300);
    });
}

function setupSecurityInteractions() {
    // Add hover effects to security features
    document.querySelectorAll('.feature').forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.filter = 'grayscale(0) brightness(1)';
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.filter = 'grayscale(1) brightness(0.8)';
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add click effects to compliance cards
    document.querySelectorAll('.compliance-card').forEach(card => {
        card.addEventListener('click', function() {
            // Add pulse effect to status dot
            const statusDot = this.querySelector('.status-dot');
            if (statusDot) {
                statusDot.style.animation = 'none';
                setTimeout(() => {
                    statusDot.style.animation = 'pulse 2s infinite';
                }, 100);
            }
        });
    });
    
    // Add interactive threat stats
    document.querySelectorAll('.threat-stat').forEach(stat => {
        stat.addEventListener('click', function() {
            const bar = this.querySelector('.threat-bar');
            if (bar) {
                // Add glow effect
                bar.style.boxShadow = '0 0 20px rgba(255, 0, 170, 0.5)';
                setTimeout(() => {
                    bar.style.boxShadow = '';
                }, 1000);
            }
        });
    });
    
    // Add interactive audit items
    document.querySelectorAll('.audit-item').forEach(item => {
        item.addEventListener('click', function() {
            // Highlight the result
            const result = this.querySelector('.result-text');
            if (result) {
                result.style.color = '#FF00AA';
                result.style.textShadow = '0 0 10px #FF00AA';
                setTimeout(() => {
                    result.style.color = '#00BFFF';
                    result.style.textShadow = '';
                }, 1000);
            }
        });
    });
}

function startSecurityVisualizations() {
    // Animate dashboard metrics
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        animateMetricValue(metric);
    });
    
    // Animate encryption flow
    const encryptionFlow = document.querySelector('.encryption-flow');
    if (encryptionFlow) {
        const flowSteps = encryptionFlow.querySelectorAll('.flow-step');
        flowSteps.forEach((step, index) => {
            setTimeout(() => {
                step.style.transform = 'scale(1.1)';
                step.style.background = 'rgba(0, 191, 255, 0.2)';
                setTimeout(() => {
                    step.style.transform = 'scale(1)';
                    step.style.background = 'rgba(0, 191, 255, 0.1)';
                }, 500);
            }, index * 1000);
        });
    }
    
    // Animate spec items
    const specItems = document.querySelectorAll('.spec-item');
    specItems.forEach((item, index) => {
        setTimeout(() => {
            addLoadingAnimation(item);
        }, index * 100);
    });
    
    // Animate protection features
    const protectionFeatures = document.querySelectorAll('.protection-feature');
    protectionFeatures.forEach((feature, index) => {
        setTimeout(() => {
            addLoadingAnimation(feature);
        }, index * 150);
    });
}

function animateMetricValue(element) {
    const finalValue = element.textContent;
    let numericValue;
    
    if (finalValue.includes('M')) {
        numericValue = parseFloat(finalValue);
    } else if (finalValue.includes('%')) {
        numericValue = parseFloat(finalValue);
    } else if (finalValue.includes('-bit')) {
        numericValue = parseInt(finalValue);
    } else {
        numericValue = parseFloat(finalValue);
    }
    
    animateNumber(element, 0, numericValue, 2000, finalValue);
}

function animateNumber(element, start, end, duration, originalText) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = start + (end - start) * easeOutCubic(progress);
        
        if (originalText.includes('M')) {
            element.textContent = currentValue.toFixed(1) + 'M';
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

function animateThreatStats() {
    const threatStats = document.querySelectorAll('.threat-stat');
    threatStats.forEach((stat, index) => {
        setTimeout(() => {
            addLoadingAnimation(stat);
            
            // Animate the bar
            const bar = stat.querySelector('.threat-bar');
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

// Add scroll-triggered animations
const securityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Trigger specific animations based on element type
            if (entry.target.classList.contains('compliance-card')) {
                animateComplianceCard(entry.target);
            } else if (entry.target.classList.contains('principle')) {
                animatePrinciple(entry.target);
            } else if (entry.target.classList.contains('dont-item')) {
                animateDontItem(entry.target);
            }
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.compliance-card, .principle, .dont-item');
    animateElements.forEach(el => securityObserver.observe(el));
});

function animateComplianceCard(card) {
    const icon = card.querySelector('.compliance-icon');
    const title = card.querySelector('h3');
    const text = card.querySelector('p');
    const status = card.querySelector('.compliance-status');
    
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
    
    if (text) {
        text.style.transform = 'translateY(20px)';
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.transform = 'translateY(0)';
            text.style.opacity = '1';
        }, 600);
    }
    
    if (status) {
        status.style.transform = 'scale(0)';
        status.style.opacity = '0';
        setTimeout(() => {
            status.style.transform = 'scale(1)';
            status.style.opacity = '1';
        }, 800);
    }
}

function animatePrinciple(principle) {
    const icon = principle.querySelector('.principle-icon');
    const title = principle.querySelector('h4');
    const text = principle.querySelector('p');
    
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

function animateDontItem(item) {
    const icon = item.querySelector('.dont-icon');
    const text = item.querySelector('span:last-child');
    
    if (icon) {
        icon.style.transform = 'scale(0)';
        icon.style.opacity = '0';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
            icon.style.opacity = '1';
        }, 200);
    }
    
    if (text) {
        text.style.transform = 'translateX(-20px)';
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.transform = 'translateX(0)';
            text.style.opacity = '1';
        }, 400);
    }
}

// Add interactive system prompt
const systemPrompt = document.querySelector('.system-prompt');
if (systemPrompt) {
    systemPrompt.addEventListener('click', function() {
        const promptText = this.querySelector('.prompt-text');
        const messages = [
            'Your data is encrypted. Probably.',
            'Security level: MAXIMUM',
            'Threats detected: 0',
            'Encryption status: ACTIVE',
            'Your data is encrypted. Probably.'
        ];
        
        let messageIndex = 0;
        const interval = setInterval(() => {
            promptText.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }, 1000);
        
        setTimeout(() => {
            clearInterval(interval);
            promptText.textContent = 'Your data is encrypted. Probably.';
        }, 5000);
    });
}

// Add real-time security updates
function simulateSecurityUpdates() {
    const statusIndicator = document.querySelector('.status-indicator');
    const systemStatus = document.querySelector('.system-status');
    
    if (statusIndicator && systemStatus) {
        setInterval(() => {
            // Randomly change status
            if (Math.random() < 0.1) {
                statusIndicator.style.background = '#FF00AA';
                systemStatus.textContent = 'SYSTEM STATUS: SCANNING';
                setTimeout(() => {
                    statusIndicator.style.background = '#00BFFF';
                    systemStatus.textContent = 'SYSTEM STATUS: SECURE';
                }, 2000);
            }
        }, 5000);
    }
}

// Start security updates
window.addEventListener('load', function() {
    setTimeout(simulateSecurityUpdates, 3000);
});

// Add interactive bar chart
document.querySelectorAll('.bar').forEach(bar => {
    bar.addEventListener('click', function() {
        // Add glow effect
        this.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.5)';
        setTimeout(() => {
            this.style.boxShadow = '';
        }, 1000);
    });
});

// Add interactive spec items
document.querySelectorAll('.spec-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add highlight effect
        this.style.background = 'rgba(0, 191, 255, 0.2)';
        this.style.borderColor = '#00BFFF';
        
        setTimeout(() => {
            this.style.background = 'rgba(0, 191, 255, 0.1)';
            this.style.borderColor = 'rgba(0, 191, 255, 0.2)';
        }, 1000);
    });
});

// Add interactive protection features
document.querySelectorAll('.protection-feature').forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.feature-icon');
        if (icon) {
            icon.style.filter = 'grayscale(0) brightness(1)';
            icon.style.transform = 'scale(1.2)';
        }
    });
    
    feature.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.feature-icon');
        if (icon) {
            icon.style.filter = 'grayscale(1) brightness(0.8)';
            icon.style.transform = 'scale(1)';
        }
    });
});
