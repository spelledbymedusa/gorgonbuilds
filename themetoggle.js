document.addEventListener('DOMContentLoaded', () => {
    const THEME_KEY = 'theme';
    const LIGHT_MODE_CLASS = 'light-mode';
    const toggle = document.getElementById('themetoggle');
    const body = document.body;

    if (!toggle || !body) {
        console.error('Theme toggle button or body element not found!');
        return;
    }

    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add(LIGHT_MODE_CLASS);
            toggle.checked = true;
        } else {
            body.classList.remove(LIGHT_MODE_CLASS);
            toggle.checked = false;
        }
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
