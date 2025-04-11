// theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
