function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");

    if (dots.style.display === "none") {
        // Show less with animation
        moreText.classList.remove("show", "expanding");
        moreText.classList.add("collapsing");
        
        setTimeout(() => {
            dots.style.display = "inline";
            moreText.style.display = "none";
            moreText.classList.remove("collapsing");
        }, 400);
    } else {
        // Show more with animation
        dots.style.display = "none";
        moreText.style.display = "inline";
        
        setTimeout(() => {
            moreText.classList.add("show", "expanding");
        }, 10);
        
        setTimeout(() => {
            moreText.classList.remove("expanding");
        }, 600);
    }
}

// Add some extra interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.getElementById("dots");
    const highlights = document.querySelectorAll('.highlight');
    
    // Add click ripple effect to dots
    dots.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(139, 60, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add floating animation to highlights on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'float 3s ease-in-out infinite';
            }
        });
    });
    
    highlights.forEach(highlight => {
        observer.observe(highlight);
    });
});

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
    }
`;
document.head.appendChild(style);