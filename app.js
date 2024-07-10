let maximum = parseInt(prompt("Enter the maximum number!"));

while (isNaN(maximum)) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (guess !== "q" && parseInt(guess) !== targetNum) {
  if (parseInt(guess) > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else if (parseInt(guess) < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
  } else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
  attempts++;
}

if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
