document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themetoggle');
    const body = document.body;
    
    // Apply saved theme on load
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});

