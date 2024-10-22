// Array to store quote objects
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Do something today that your future self will thank you for.", category: "Motivation" }
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    // Validate the input values
    if (newQuoteText && newQuoteCategory) {
        // Add the new quote to the array
        quotes.push({ text: newQuoteText, category: newQuoteCategory });

        // Clear the form fields
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        // Display a success message or update the display
        alert('New quote added successfully!');
    } else {
        alert('Please enter both a quote and a category.');
    }
}

// Attach event listener to the 'Show New Quote' button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Attach event listener to the 'Add Quote' button
document.getElementById('addQuoteButton').addEventListener('click', addQuote);


// Array to store quote objects
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Do something today that your future self will thank you for.", category: "Motivation" }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');

    // Set the textContent of the quoteDisplay element without using innerHTML
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Attach event listener to the 'Show New Quote' button
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);


// Array to store quote objects
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Do something today that your future self will thank you for.", category: "Motivation" }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

// Function to add a new quote
function addQuote() {
    const quoteText = document.getElementById('newQuoteText').value;
    const quoteCategory = document.getElementById('newQuoteCategory').value;

    // Ensure that both fields are filled before adding
    if (quoteText && quoteCategory) {
        // Add new quote to the quotes array
        quotes.push({ text: quoteText, category: quoteCategory });
        
        // Clear the input fields after adding the quote
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        // Optionally display the added quote
        alert("New quote added successfully!");
    } else {
        alert("Please fill in both fields!");
    }
}

// Attach event listeners
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', addQuote);
