// Smooth Scroll for anchor links (navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust the offset to your desired scroll position
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (if you want to add mobile navigation later)
function toggleMenu() {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('active'); // Add or remove 'active' class to toggle menu visibility
}

// Example for a mobile menu button
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Form Validation (Basic client-side validation for forms)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const nameField = form.querySelector('input[name="name"]');
        const emailField = form.querySelector('input[name="email"]');
        const messageField = form.querySelector('textarea[name="message"]');
        
        if (!nameField.value || !emailField.value || !messageField.value) {
            alert('Please fill in all required fields!');
            e.preventDefault(); // Prevent form submission if any field is empty
        }
    });
}

// Example of dynamically changing content (optional)
document.addEventListener('DOMContentLoaded', () => {
    const dynamicContentElement = document.getElementById('dynamic-content');
    if (dynamicContentElement) {
        dynamicContentElement.innerHTML = 'This content was updated dynamically with JavaScript!';
    }
});
