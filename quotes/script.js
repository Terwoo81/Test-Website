const quote_url = "https://api.quotable.io/random";

const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", getQuote);

async function getQuote () {
  const response = await fetch(quote_url);
  const json = await response.json();

  const content = json["content"];

  const quoteText = document.getElementById("quote-text");
  quoteText.innerHTML = content;

  const author = json["author"];

  const quoteAuthor = document.getElementById("quote-author");
  quoteAuthor.innerHTML = author;

}
