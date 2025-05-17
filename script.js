// Smooth scrolling for navbar links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the href attribute
            const targetId = this.getAttribute('href');
            
            // Check if it's an internal link (starts with #)
            if (targetId.startsWith('#')) {
                // Find the target element
                const targetElement = document.querySelector(targetId);
                
                // If target element exists, scroll to it
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for navbar height
                        behavior: 'smooth'
                    });
                }
            } else if (targetId === 'index.html') {
                // If it's the home link, scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // For external pages, navigate normally
                window.location.href = targetId;
            }
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
    
    // Add scroll detection for navbar styling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Add WhatsApp link to "Sell This Now" buttons
    const sellButtons = document.querySelectorAll('.buy-button');
    sellButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open('https://wa.link/eyeiho', '_blank');
        });
    });
});
document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });