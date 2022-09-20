const isCounterPage = document.querySelector(".counter-page");
if (isCounterPage) {
}

let numberFirstLine = [];
let numberSecondLine = [];

let buttonAdditionFirstLine = document.querySelector(
  ".buttonAdditionFirstLine"
);
let buttonSubtractionFirstLine = document.querySelector(
  ".buttonSubtractionFirstLine"
);
let firstResult = JSON.parse(localStorage.getItem("numberFirstLine") || 0);
buttonAdditionFirstLine.addEventListener("click", function () {
  let result = ++firstResult;

  numberFirstLine.splice(0, 1, result);
  localStorage.setItem("numberFirstLine", JSON.stringify(numberFirstLine));
  document.getElementById("countFirst").innerHTML = result;
});

buttonSubtractionFirstLine.addEventListener("click", function () {
  let result = --firstResult;

  numberFirstLine.splice(0, 1, result);
  localStorage.setItem("numberFirstLine", JSON.stringify(numberFirstLine));
  document.getElementById("countFirst").innerHTML = result;
});

let buttonAdditionSecondLine = document.querySelector(
  ".buttonAdditionSecondLine"
);
let buttonSubtractionSecondLine = document.querySelector(
  ".buttonSubtractionSecondLine"
);

let secondResult = JSON.parse(localStorage.getItem("numberSecondLine") || 0);
buttonAdditionSecondLine.addEventListener("click", function () {
  let result = ++secondResult;

  document.getElementById("countSecond").innerHTML = result;
  numberSecondLine.splice(0, 1, result);
  localStorage.setItem("numberSecondLine", JSON.stringify(numberSecondLine));
});

buttonSubtractionSecondLine.addEventListener("click", function () {
  let result = --secondResult;

  document.getElementById("countSecond").innerHTML = result;
  numberSecondLine.splice(0, 1, result);
  localStorage.setItem("numberSecondLine", JSON.stringify(numberSecondLine));
});
let reset = document.querySelector(".button_reset");

reset.addEventListener("click", function () {
  localStorage.clear();
  firstResult = 0;
  secondResult = 0;
  return (
    (document.getElementById("countSecond").innerHTML = 0),
    (document.getElementById("countFirst").innerHTML = 0)
  );
});

if (JSON.parse(localStorage.getItem("numberFirstLine"))) {
  document.getElementById("countFirst").innerHTML = JSON.parse(
    localStorage.getItem("numberFirstLine")
  );
}

if (JSON.parse(localStorage.getItem("numberSecondLine"))) {
  document.getElementById("countSecond").innerHTML = JSON.parse(
    localStorage.getItem("numberSecondLine")
  );
}

// function saveNumber() {
//   number.push(buttonAdditionFirstLine.value);
//   localStorage.setItem("number", JSON.stringify(number));
// }
