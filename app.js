const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const next = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");
const preve = document.querySelector(".preve");

window.navigator.vibrate([200, 100, 200]);

let showData = "";

  next.addEventListener("click", () => {
    preve.classList.add("clickedPreve");

    preve.classList.remove("disabled")

  });

const nextText = () => {
  let rand = Math.floor(Math.random() * 1640);

  preve.addEventListener("click", () => {

    preve.classList.add("disabled")

    const A_llLi = document.querySelectorAll(".allLi");

    const getPrevRand = A_llLi[1].innerText;

    console.log(getPrevRand);

    rand = getPrevRand;

    const quotesText = showData[rand].text;
    const quotesAuthor = showData[rand].author;

    quotes.innerHTML = "'' " + quotesText + " ''";

    quotesAuthor === null
      ? (author.innerText = "Unknown")
      : (author.innerText = "BY- " + quotesAuthor);
  });

  const getList = document.querySelector(".getList");
  const setLi = document.createElement("li");
  setLi.classList.add("allLi");

  setLi.innerText = rand;

  getList.insertAdjacentElement("afterbegin", setLi);

  console.log(rand);
  const quotesText = showData[rand].text;
  const quotesAuthor = showData[rand].author;

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

let bg = [
  "#9a9a1b",
  "indigo",
  "#169207",
  "#232222",
  "#31174e",
  "orange",
  "#ff607b",
  "purple",
  "salmon",
  "cadetblue",
  "#7e6db3",
  "#625675",
  "#3d4669F",
  "#7f8e30",
  "#0d5d6f",
  "#8f8ae0",
  "#e85685",
  "#567b4f",
  "#7dbfce",
  "#455a5f",
  "#ffbb66",
];

// console.log(bg.length);

const clsIndxUP = Math.floor(Math.random() * 21);
wrapper.style.background = bg[clsIndxUP];
next.addEventListener("click", () => {
  nextText();
  const clsIndx = Math.floor(Math.random() * 10);
  wrapper.style.background = bg[clsIndx];
});

getData();

const copyBtn = document.querySelector(".copyBtn");
const Cquotes = document.querySelector(".quotes");
const Cauthor = document.querySelector(".author");
const copiedData = document.querySelector(".copiedData");
const copiedForm = document.querySelector(".copiedForm")

copyBtn.addEventListener("click", () => {
  console.log("clicked");
  const CpQotes = Cquotes.innerText;
  const CpAuthor = Cauthor.innerText;

  const pre = document.createElement("pre");

  const getPre = (pre.innerText = `${CpQotes}
    
    ${CpAuthor}`);
  console.log(getPre);

  const TextBox = (copiedData.value = getPre);

  // alert(TextBox)

  copiedData.select();
  copiedData.setSelectionRange(0, 99999);
  document.execCommand("copy");

copiedForm.reset()

});
