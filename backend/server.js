import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
 
app.use(cors());
app.use(express.json()); // lets us read JSON from POST requests
 

const quotes = [
  { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
  { quote: "I should have been more kind.", author: "Clive James" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];
 
function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
 
app.get("/", (req, res) => {
  const quote = randomQuote();
  res.json(quote);
});
 
app.post("/", (req, res) => {
  const { quote, author } = req.body;

  if (!quote || !author) {
    res.status(400).send("Please provide both a quote and an author.");
    return;
  }

  quotes.push({ quote, author });
  res.send("ok");
});
 
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});