// quotes.js
const quotes = [
      "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "When one door of happiness closes, another opens; but we often look so long at the closed door that we do not see the one which has been opened for us. - Helen Keller",
    "It is never too late to be what you might have been. - George Eliot",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh"
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
