// quotes.js
const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
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
