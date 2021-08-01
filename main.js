  // Meditate: #C278FD
  // Exercise: #FD8078
  // Error: #EFB7EC

// Query Selectors
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var activityButtons = document.querySelectorAll("div.activity-category-div > input");
var startActivityButton = document.querySelector('#start-activity-button')

var taskDescriptionInput = document.getElementById("task-description");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var inputFields = [ taskDescriptionInput, minutesInput, secondsInput ];
var formSubmit = document.querySelector("form");

var activityForm = document.querySelector('.activity-form');
var activityHeader = document.querySelector('.activity-header');
var errorMessage = document.querySelector(".error-message");
var warningText = document.querySelectorAll('.warning');
var categoryWarning = document.querySelector('.category-warning');
var timerDisplay = document.querySelector('.timer-display');
var timerDescription = document.querySelector('.timer-description');
var timer = document.querySelector(".timer");
var startTimer = document.querySelector(".start-timer");

// Event Handlers
// studyButton.addEventListener("click", activateStudy);
// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
for (var i = 0; i < activityButtons.length; i++) {
  activityButtons[i].addEventListener("click", activateButton);
};

for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", detectKeyInput);
};

minutesInput.addEventListener("keydown", preventInvalidCharacters);
secondsInput.addEventListener("keydown", preventInvalidCharacters);
formSubmit.addEventListener("submit", submitForm);
startTimer.addEventListener("click", updateTimer);

// startActivityButton.addEventListener('click', showTimerView);

// Global vriables
var invalidCharacters = [ "-", "+", "e", " " ];
var newActivity;
var countdown;

// Functions
function removeActivation() {
  studyButton.classList.remove("study-button-clicked");
  meditateButton.classList.remove("meditate-button-clicked");
  exerciseButton.classList.remove("exercise-button-clicked");
  for (var i = 0; i < activityButtons.length; i++) {
    activityButtons[i].classList.remove('checked');
  }
};

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
};

function detectKeyInput() {
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      warningText[i].innerHTML = ``;
    }
  }
};

function preventInvalidCharacters() {
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
};

function checkFields() {
  event.preventDefault();
  if (!getCategory()) {
    categoryWarning.innerHTML = `<img src="./assets/warning.svg" alt="warning sign" id="warning"> A category is required.`;
    return false;
  }
  for (var i=0; i < inputFields.length; i++) {
    if (!inputFields[i].value) {
      categoryWarning.innerHTML = ``;
      warningText[i].innerHTML = `
        <img src="./assets/warning.svg" alt="warning sign" id="warning"> A ${inputFields[i].name} is required.
      `;
      return false;
    }
  }
  return true;
}

function submitForm() {
  if (checkFields()) {
    newActivity = new Activity(getCategory(), taskDescriptionInput.value, minutesInput.value, secondsInput.value);
    console.log(newActivity);
    showTimerView();
  }
}


function getCategory() {
  for (var i = 0; i < activityButtons.length; i++) {
    if (activityButtons[i].checked) {
      startTimer.classList.add(activityButtons[i].value.toLowerCase());
      // console.log(activityButtons[i].value.toLowerCase());
      return activityButtons[i].value;
    }
  }
  return false;
}

function showTimerView() {
  formSubmit.classList.add('hidden');
  timerDisplay.classList.remove('hidden');
  timerDescription.innerText = newActivity.description;

  if (newActivity.seconds < 10) {
    timer.innerText = `${newActivity.minutes}:0${newActivity.seconds}`;
  } else {
    timer.innerText = `${newActivity.minutes}:${newActivity.seconds}`;
  }
}

function updateTimer() {
  countdown = setInterval(function() {
    newActivity.startTimer()
  }, 1000);
};


function logTarget(event) {
  console.log(event.target);
}
