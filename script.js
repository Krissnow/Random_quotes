const quotes = [
  {
    text: "Будь собой; все остальные роли уже заняты.",
    author: "Оскар Уайльд",
  },
  {
    text: "Единственный способ делать великие дела — любить то, что ты делаешь.",
    author: "Стив Джобс",
  },
  {
    text: "Счастье — это не что иное, как хорошее здоровье и плохая память.",
    author: "Альберт Швейцер",
  },
  {
    text: "Делай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут.",
    author: "Неизвестный",
  },
  {
    text: "Не бойтесь совершенства. Вам его не достичь.",
    author: "Сальвадор Дали",
  },
];

const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.querySelector(".quote").textContent = `"${quote.text}"`;
  document.querySelector(".author").textContent = `- ${quote.author}`;
}

generateBtn.addEventListener("click", generateQuote);
