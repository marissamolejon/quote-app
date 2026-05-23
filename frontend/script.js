// Automatically use the right URL depending on environment
const BASE_URL = window.location.hostname === "127.0.0.1" 
  ? "http://127.0.0.1:3000" 
  : "https://riceislife-quote-generator-backend.sslip.io";

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function fetchQuote() {
  quoteText.textContent = "Loading...";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch(`${BASE_URL}/quotes`);
    const data = await response.json();

    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `— ${data.author}`;

  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch a quote.";
    quoteAuthor.textContent = "";
    console.error("Error:", error);
  }
}

fetchQuote();
newQuoteBtn.addEventListener("click", fetchQuote);