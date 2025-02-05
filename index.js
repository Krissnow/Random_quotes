import quotes from "./src/quotes.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from "./src/favoritesHandler.js";
import { generateRandomInt } from "./src/utils.js";

const generateBtn = document.getElementById("generate-btn");
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const { text, author, isFavorite } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;
  quoteElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = `${author}`;

  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

generateBtn.addEventListener("click", generateQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateQuote();
