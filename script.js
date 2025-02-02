import quotes from "./quotes.js";

const generateBtn = document.getElementById("generate-btn");
const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("author");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[currentQuoteIndex];
  quoteElement.textContent = `"${quote.text}"`;
  quoteAuthorElement.textContent = `${quote.author}`;
  toggleFavoriteBtn.textContent = quote.isFavorite
    ? "Удалить из избранных"
    : "Добавить в избранные";

  toggleFavoriteBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Удалить из избранных"
    : "Добавить в избранные";

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
    <p>${currentQuote.text}</p>
    <p class="author">${currentQuote.author}</p>
    `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.text)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener("click", generateQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateQuote();
