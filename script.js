// Lightbox configuration
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Image %1 of %2',
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'positionFromTop': 50
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}); 