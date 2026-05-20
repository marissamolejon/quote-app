// Get references to our HTML elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Fetch a random quote from our backend
async function fetchQuote() {
  // Show loading state while we wait
  quoteText.textContent = "Loading...";
  quoteAuthor.textContent = "";

  try {
    // Ask our backend for a quote
    const response = await fetch("http://127.0.0.1:3000/");

    // Convert the response to a JavaScript object
    const data = await response.json();

    // Update the DOM with the quote from our backend
    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `— ${data.author}`;

  } catch (error) {
    // If something goes wrong, show an error message
    quoteText.textContent = "Oops! Could not fetch a quote.";
    quoteAuthor.textContent = "";
    console.error("Error:", error);
  }
}

// Fetch a quote when the page loads
fetchQuote();

// Fetch a new quote when the button is clicked
newQuoteBtn.addEventListener("click", fetchQuote);