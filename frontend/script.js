const quoteText = document.getElementById("quote-text"); 
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
 
async function fetchQuote() {
  // Show loading state while we wait
  quoteText.textContent = "Loading...";
  quoteAuthor.textContent = "";

  try {
   const response = await fetch("/quotes");

   const data = await response.json();

     quoteText.textContent = `"${data.quote}"`;
     quoteAuthor.textContent = `— ${data.author}`;

  } catch (error) {
     quoteText.textContent = "Oops! Could not fetch a quote.";
     quoteAuthor.textContent = "";
     console.error("Error:", error);
  }
}

// Fetch a quote when the page loads
fetchQuote();

// Fetch a new quote when the button is clicked
newQuoteBtn.addEventListener("click", fetchQuote);