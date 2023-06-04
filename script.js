let btn = document.querySelector("button");
let inpt = document.querySelector("#myInput");
const screen = document.querySelector(".alert");
let number = Math.round(Math.random() * 100);
let biggerGuess = 100,
  smallGuess = 0,
  counter = 0;
btn.addEventListener("click", guessGame);
inpt.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btn.click();
  }
});
function guessGame() {
  let guess = inpt.value;
  counter++;
  if (guess < 0 || guess > 100 || guess === "") {
    screen.innerText = `The number you have enetered must be a number between 0-100`;
  } else {
    if (number == guess) {
      screen.innerText = `You got it right on ${counter}. guess.👏`;
      number = Math.round(Math.random() * 100);
      counter = biggerGuess = smallGuess = guess = 0;
    } else if (guess < number) {
      smallGuess = guess;
      screen.innerText = `Enter a number between ${guess} - ${biggerGuess}`;
    } else {
      biggerGuess = guess;
      screen.innerText = `Enter a number between ${smallGuess} - ${guess}`;
    }
    inpt.value = "";
  }
}
