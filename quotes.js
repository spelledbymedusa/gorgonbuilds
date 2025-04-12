// quotes.js
const quotes = [
     "The best way to predict the future is to create it. - Peter Drucker",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
    "Knowing others is intelligence; knowing yourself is true wisdom. - Lao Tzu",
    "The unexamined life is not worth living. - Socrates",
    "You become what you believe. - Buddha",
    "Happiness depends upon ourselves. - Aristotle",
    "Knowing yourself is the beginning of all wisdom. - Aristotle",
    "It is not that we have a short time to live, but that we waste a lot of it. - Seneca",
    "Man conquers the world by conquering himself. - Zeno of Citium",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "What we achieve inwardly will change outer reality. - Plutarch",
    "The more man meditates upon good thoughts, the better will be his world and the world at large. - Confucius",
    "The soul becomes dyed with the colour of its thoughts. - Marcus Aurelius",
    "The greatest wealth is to live content with little. - Plato",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "What you do today can improve all your tomorrows. - Ralph Marston",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It is not how old you are, but how you are old. - Jules Renard"
];

// Function to get a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to display the random quote when button is clicked
function showRandomQuote() {
    const randomQuote = getRandomQuote(); // Get random quote from quotes array
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.innerText = randomQuote; // Display the quote in the HTML
}

// Set up the event listener for the button click
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    button.addEventListener("click", showRandomQuote); // Call showRandomQuote on button click
});
