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
  {
    text: "Жизнь — это то, что с тобой происходит, пока ты строишь планы.",
    author: "Джон Леннон",
  },
  {
    text: "Чем меньше у человека потребностей, тем он ближе к богам.",
    author: "Сократ",
  },
  {
    text: "Трудности реальны только тогда, когда мы сдаемся перед ними.",
    author: "Наполеон Хилл",
  },
  {
    text: "Все, что вы можете вообразить, реально.",
    author: "Пабло Пикассо",
  },
  {
    text: "Чтобы дойти до цели, надо прежде всего идти.",
    author: "Оноре де Бальзак",
  },
];

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
