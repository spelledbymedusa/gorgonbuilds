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
        body.classList.toggle(LIGHT_MODE_CLASS, isLight);
        toggle.checked = isLight;
        sunIcon.style.display = isLight ? 'inline' : 'none';
        moonIcon.style.display = isLight ? 'none' : 'inline';
    };

    // Apply saved theme on load
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(savedTheme);

    // Toggle theme on change
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    });
});
