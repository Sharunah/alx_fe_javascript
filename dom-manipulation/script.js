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

// Function to create a dynamic form for adding quotes
function createAddQuoteForm() {
    const formContainer = document.getElementById('quoteFormContainer');
    
    // Create input for the quote text
    const quoteInput = document.createElement('input');
    quoteInput.setAttribute('id', 'newQuoteText');
    quoteInput.setAttribute('type', 'text');
    quoteInput.setAttribute('placeholder', 'Enter a new quote');
    
    // Create input for the quote category
    const categoryInput = document.createElement('input');
    categoryInput.setAttribute('id', 'newQuoteCategory');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('placeholder', 'Enter quote category');
    
    // Create button to add the new quote
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Quote';
    addButton.addEventListener('click', addQuote);  // Link the button to addQuote function
    
    // Append inputs and button to the form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);
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

// Call the function to generate the form when the page loads
createAddQuoteForm();

