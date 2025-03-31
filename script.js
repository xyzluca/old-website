document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    const socialLinks = document.getElementById('social-links');
    
    burgerMenu.addEventListener('click', function() {
        // Toggle active class für Burger-Animation
        burgerMenu.classList.toggle('active');
        
        // Toggle Menüs
        navLinks.classList.toggle('active');
        socialLinks.classList.toggle('active');
    });
    
    // Schließe Menü, wenn auf einen Link geklickt wird
    const allLinks = document.querySelectorAll('.nav-links a, .social-links a');
    
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Nur schließen, wenn wir auf kleineren Bildschirmen sind
            if (window.innerWidth <= 768) {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                socialLinks.classList.remove('active');
            }
        });
    });
    
    // Schließe Menü wenn außerhalb geklickt wird
    document.addEventListener('click', (event) => {
        const isNavbarClick = event.target.closest('.navbar');
        const isBurgerClick = event.target.closest('.burger-menu');
        
        if (!isNavbarClick || isBurgerClick) return;
        
        if (window.innerWidth <= 768 && (navLinks.classList.contains('active') || socialLinks.classList.contains('active'))) {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            socialLinks.classList.remove('active');
        }
    });
});
