// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    // Your form submission logic goes here
});
