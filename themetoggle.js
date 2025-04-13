document.addEventListener('DOMContentLoaded', () => {
    const THEME_KEY = 'theme';  // The key to store the theme in localStorage
    const LIGHT_MODE_CLASS = 'light-mode';  // Class for light mode
    const toggle = document.getElementById('themetoggle');  // The theme toggle checkbox
    const body = document.body;  // Access the body element

    // If any required elements are missing, log an error and stop execution
    if (!toggle || !body) {
        console.error('Missing theme toggle elements!');
        return;
    }

    // Function to apply the selected theme
    const applyTheme = (theme) => {
        const isLight = theme === 'light';  // Check if the theme is light
        body.classList.toggle(LIGHT_MODE_CLASS, isLight);  // Apply the light mode class
        toggle.checked = isLight;  // Update the checkbox state based on the theme

    };

    // Apply saved theme on load (default to 'dark' if not saved)
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(savedTheme);  // Apply the saved theme

    // Event listener for the toggle change (when user changes the theme)
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'light' : 'dark';  // Determine new theme based on toggle state
        applyTheme(newTheme);  // Apply the new theme
        localStorage.setItem(THEME_KEY, newTheme);  // Save the selected theme in localStorage
    });
});
