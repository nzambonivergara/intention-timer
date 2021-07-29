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
var formSubmit = document.querySelector("form");
var errorMessage = document.querySelector(".error-message");
var taskDescriptionInput = document.getElementById("task-description");
var inputFields = [ taskDescriptionInput, minutesInput, secondsInput ];


// Event Handlers
// studyButton.addEventListener("click", activateStudy);
// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
for (var i = 0; i < activityButtons.length; i++) {
  activityButtons[i].addEventListener("click", activateButton);
};
minutesInput.addEventListener("keydown", preventInvalidCharacters);
secondsInput.addEventListener("keydown", preventInvalidCharacters);
formSubmit.addEventListener("submit", submitForm);

// Global vriables
var invalidCharacters = [ "-", "+", "e", " " ];


// Functions
function removeActivation() {
  studyButton.classList.remove("study-button-clicked");
  meditateButton.classList.remove("meditate-button-clicked");
  exerciseButton.classList.remove("exercise-button-clicked");
  for (var i = 0; i < activityButtons.length; i++) {
    activityButtons[i].classList.remove('checked');
  }
}

function activateButton(event) {
  removeActivation();
  if (event.target.value === "Study") {
    studyButton.classList.add("study-button-clicked");
    studyButton.checked = true;
  } else if (event.target.value === "Meditate") {
    meditateButton.classList.add("meditate-button-clicked");
    meditateButton.checked = true;
  } else if (event.target.value === "Exercise") {
    exerciseButton.classList.add("exercise-button-clicked");
    exerciseButton.checked = true;
  }
}

function preventInvalidCharacters(event) {
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
}

function submitForm() {
  event.preventDefault();
  for (var i=0; i<inputFields.length; i++) {
    if (!inputFields[i].value) {
      inputFields[i].insertAdjacentHTML("afterend", `<p><img src="./assets/warning.svg" alt="warning sign" id="warning"> A ${inputFields[i].id} is required.</p>`)
    } else {
        // create a new activity intance with the form values
    }
  }

}

// if we have a variable set to an interpolated string of that
// description field errro;
// for loop checking to see if any fields are empty
// conditional statement (!inputFields[i].value) {
  // append <p><img src="./assets/warning.svg" alt="warning sign" id="warning"> A ${inputFields[i].id} is required.</p>

// Write an html element <p> <img> </p>
 // Add a class of hidden
// get the form
// add event listener when "submit"
// event handler -- showErrorMessage
// if empty fields,
// Remove hidden class
// if not empty,
// add hidden class


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

//
//
// function logTarget(event) {
//   console.log(event.target);
// }
