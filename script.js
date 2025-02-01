import quotes from "./quotes.js";

const generateBtn = document.getElementById("generate-btn");
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteElement.textContent = `"${quote.text}"`;
  quoteAuthorElement.textContent = `${quote.author}`;
}

generateBtn.addEventListener("click", generateQuote);
