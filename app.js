const calculateBtn = document.querySelector(".calculateBtn");
const inputValue = document.querySelector(".word-counter__input").value;
const showLength = document.querySelector(".length--text");
let wordCount = 0;

function wordLength() {
  const inputValue = document.querySelector(".word-counter__input").value;
  const count = inputValue.length;
  showLength.innerHTML = count;
}

function generateBgColor() {
  let colorArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash += colorArray[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hash;
  document.body.style.transition = "1s ease-in";
}

setInterval(generateBgColor, 1500);

calculateBtn.addEventListener("click", () => {
  wordLength();
  changeBg();
});
