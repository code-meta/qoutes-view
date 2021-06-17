const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const next = document.querySelector(".next");

let showData = "";

const nextText = () => {
  let rand = Math.floor(Math.random() * 1640);
  console.log(rand);
  const quotesText = showData[rand].text;
  const quotesAuthor = showData[rand].author;

  console.log(quotesText);
  console.log(quotesAuthor);
  quotes.innerHTML = "'' " + quotesText + " ''";
  quotesAuthor === null
    ? (author.innerText = "Unknown")
    : (author.innerText = "BY- " + quotesAuthor);
};

const getData = async () => {
  const api = "quotes.json";

  try {
    let data = await fetch(api);
    showData = await data.json();
    nextText();
  } catch (error) {}
};

next.addEventListener("click", nextText);
getData();
