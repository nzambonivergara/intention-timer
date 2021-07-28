// Create classes with image/color for each button
  // Meditate: #C278FD
  // Exercise: #FD8078
  // Error: #EFB7EC

// Query Selectors
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var activityButtons = document.querySelectorAll("div.activity-category-div > input");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");

// Event Handlers
// studyButton.addEventListener("click", activateStudy);
// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
for (var i = 0; i < activityButtons.length; i++) {
  activityButtons[i].addEventListener("click", activateButton);
};
minutesInput.addEventListener("keydown", preventInvalidCharacters);
secondsInput.addEventListener("keydown", preventInvalidCharacters);

// Global vriables
var invalidCharacters = [ "-", "+", "e", " " ];


// Functions
function removeActivation() {
  studyButton.classList.remove("study-button-clicked");
  meditateButton.classList.remove("meditate-button-clicked");
  exerciseButton.classList.remove("exercise-button-clicked");
}

function activateButton(event) {
  removeActivation();
  if (event.target.value === "Study") {
    studyButton.classList.add("study-button-clicked");
  } else if (event.target.value === "Meditate") {
    meditateButton.classList.add("meditate-button-clicked");
  } else if (event.target.value === "Exercise") {
    exerciseButton.classList.add("exercise-button-clicked");
  }
}

function preventInvalidCharacters(event) {
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
}

// function activateStudy() {
//   studyButton.classList.add("study-button-clicked");
// };
//
// function activateMeditate() {
//   meditateButton.classList.add("meditate-button-clicked");
// }
//
// function activateExercise() {
//   exerciseButton.classList.add("exercise-button-clicked");
// }


// Change the input type to number
// Target the minutes and seconds input fields
// Declare an array of invalid characters
// Add event listener to input fields that prevents those characters from being added



function logTarget(event) {
  console.log(event.target);
}
