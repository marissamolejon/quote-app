import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware — allows frontend to talk to backend
app.use(cors());
app.use(express.json()); // lets us read JSON from POST requests

// Our quotes data
const quotes = [
  { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
  { quote: "I should have been more kind.", author: "Clive James" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];

// Helper function — picks a random quote
function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// GET / → returns a random quote as JSON
app.get("/", (req, res) => {
  const quote = randomQuote();
  res.json(quote);
});

// POST / → adds a new quote to the list
app.post("/", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    res.status(400).send("Please provide both a quote and an author.");
    return;
  }

  quotes.push({ quote, author });
  res.send("ok");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});