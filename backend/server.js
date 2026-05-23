import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

const quotes = [
  { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
  { quote: "I should have been more kind.", author: "Clive James" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/quotes", (req, res) => {
  res.json(randomQuote());
});

app.post("/quotes", (req, res) => {
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