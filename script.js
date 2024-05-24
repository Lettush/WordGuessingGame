// Random Words
const words = [
  "rainbow",
  "apricot",
  "telescope",
  "whimsical",
  "kangaroo",
  "symphony",
  "constellation",
  "equilibrium",
  "enigmatic",
  "nostalgia",
  "volcano",
  "silhouette",
  "acrobat",
  "rhinoceros",
  "microscope",
  "cauldron",
  "firefly",
  "masquerade",
  "catastrophe",
  "melodrama",
  "banana",
  "apple",
  "orange",
  "grapefruit",
  "mango",
  "pineapple",
  "strawberry",
  "blueberry",
  "raspberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "melon",
  "coconut",
  "tomato",
  "potato",
  "carrot",
  "onion",
  "cucumber",
  "lettuce",
  "spinach",
  "broccoli",
  "cauliflower",
  "celery",
  "cheese",
  "milk",
  "eggs",
  "butter",
  "bread",
  "chicken",
  "beef",
  "pork",
  "fish",
  "shrimp",
  "table",
  "chair",
  "sofa",
  "bed",
  "lamp",
  "computer",
  "phone",
  "television",
  "radio",
  "speaker",
  "book",
  "pencil",
  "paper",
  "scissors",
  "glue",
  "house",
  "car",
  "bicycle",
  "airplane",
  "ship",
  "dog",
  "cat",
  "bird",
  "fish",
  "horse",
  "happy",
  "sad",
  "angry",
  "surprised",
  "scared",
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "one",
  "two",
  "three",
  "four",
  "five",
  "morning",
  "afternoon",
  "evening",
  "night",
  "day",
  "hot",
  "cold",
  "wet",
  "dry",
  "windy",
  "big",
  "small",
  "tall",
  "short",
  "round",
  "clean",
  "dirty",
  "full",
  "empty",
  "open",
];

// Targetting Elements
const wordDiv = document.querySelector(".word-div");
const attemptsDiv = document.querySelector(".attempts");
const keyboardDiv = document.querySelector(".keyboard");

// Creating Game Variables
const secretWord = randomWord();
let attempts = 7;
let guessedLetters = [];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Create Random Word
function randomWord() {
  return words[Math.floor(Math.random() * words.length - 1)];
}

// Initialize Game Board
function initialize(word) {
  let display = "";

  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word.charAt(i))) {
      display += word.charAt(i);
    } else {
      display += "_";
    }
  }

  wordDiv.innerHTML = display;
  attemptsDiv.innerHTML = `You have ${attempts} attempts left.`;

  letters.forEach((letter) => {
    const letterElement = document.createElement("button");
    letterElement.innerText = letter;
    letterElement.classList.add("letter");
    letterElement.addEventListener("click", (e) => {
      e.target.disabled = true;
      guess(secretWord, e.target.innerText);
    });
    keyboardDiv.append(letterElement);
  });
}

// Update Word Status
function guess(word, letter) {
  let display = "";

  guessedLetters.push(letter);
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word.charAt(i))) {
      display += word.charAt(i);
    } else {
      display += "_";
    }
  }

  wordDiv.innerHTML = display;

  if (!display.includes("_")) {
    attemptsDiv.innerHTML = "You guessed the word!";
    gameOver();
  } else if (secretWord.includes(letter)) {
    attemptsDiv.innerHTML = `The letter, ${letter}, is in the word! <br> You have ${attempts} attempts left.`;
  } else if (attempts > 1) {
    attempts--;
    attemptsDiv.innerHTML = `You have ${attempts} attempts left.`;
  } else {
    attemptsDiv.innerHTML = `You failed to guess the word! It was ${secretWord}.`;
    gameOver();
  }
}

// Disable Buttons on Game Over
function gameOver() {
  document
    .querySelectorAll(".letter")
    .forEach((button) => (button.disabled = true));
}

// Initialize Game Board
initialize(secretWord);
