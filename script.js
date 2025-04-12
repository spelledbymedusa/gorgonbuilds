// Smooth Scroll for anchor links (navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').slice(1); // Get the target element ID
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element with a smooth scroll and adjust the offset
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust the offset to your desired scroll position
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (if you want to add mobile navigation later)
function toggleMenu() {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}

// Example for a mobile menu button (assuming you have a button with the class '.menu-toggle')
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Form Validation (Basic client-side validation for forms)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const nameField = form.querySelector('input[name="name"]');
        const emailField = form.querySelector('input[name="email"]');
        const messageField = form.querySelector('textarea[name="message"]');
        
        // Check if any required field is empty
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
