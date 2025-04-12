document.addEventListener('DOMContentLoaded', () => {
    const THEME_KEY = 'theme';
    const LIGHT_MODE_CLASS = 'light-mode';
    const toggle = document.getElementById('themetoggle');
    const body = document.body;
    const sunIcon = document.querySelector('.icon.sun');
    const moonIcon = document.querySelector('.icon.moon');

    if (!toggle || !body || !sunIcon || !moonIcon) {
        console.error('Missing theme toggle elements!');
        return;
    }

    const applyTheme = (theme) => {
        const isLight = theme === 'light';
        body.classList.toggle(LIGHT_MODE_CLASS, isLight); // Apply light mode or dark mode class
        toggle.checked = isLight; // Update toggle state
        sunIcon.style.display = isLight ? 'inline' : 'none'; // Show the sun icon for light mode
        moonIcon.style.display = isLight ? 'none' : 'inline'; // Show the moon icon for dark mode
    };

    // Apply saved theme on load
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark'; // Default to 'dark' if not found
    applyTheme(savedTheme);

    // Toggle theme on change
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme); // Save theme preference to localStorage
    });
});
