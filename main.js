
// Query Selectors
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var activityButtons = document.querySelectorAll("div.activity-category-div > input");

var taskDescriptionInput = document.getElementById("taskDescription");
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");
var inputFields = [ taskDescriptionInput, minutesInput, secondsInput ];
var formSubmit = document.querySelector("form");

var activityHeader = document.querySelector('.activity-header');

var warningText = document.querySelectorAll('.warning');
var categoryWarning = document.querySelector('.category-warning');

var timerDisplay = document.querySelector('.timer-display');
var timerDescription = document.querySelector('.timer-description');
var timer = document.querySelector(".timer");
var startTimerButton = document.querySelector(".start-timer-button");

var defaultText = document.querySelector(".default-activity-text");
var activityCards = document.querySelector(".activity-cards");

var newActivityButton = document.querySelector("#newActivityButton");
var buttonContainer = document.querySelector(".button-container");

// Event Handlers
for (let i = 0; i < activityButtons.length; i++) {
  activityButtons[i].addEventListener("click", function() {
    activateButton(event)
  });
}

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", detectKeyInput);
}

minutesInput.addEventListener("keydown", function() {
  preventInvalidCharacters(event);
});
secondsInput.addEventListener("keydown", function() {
  preventInvalidCharacters(event);
});
formSubmit.addEventListener("submit", submitForm);
startTimerButton.addEventListener("click", updateTimer);
timerDisplay.addEventListener("click", function() {
  logActivity(event);
})
newActivityButton.addEventListener("click", displayFormView)
timerDisplay.addEventListener("click", function() {
  removeLogButton(event);
});
window.addEventListener('load', renderSavedActivities);

// Global variables
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
}

function activateButton(event) {
  removeActivation();
  categoryWarning.innerHTML = ``;
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

function detectKeyInput() {
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      warningText[i].innerHTML = ``;
    }
  }
}

function preventInvalidCharacters(event) {
  if (invalidCharacters.includes(event.key)) {
    event.preventDefault();
  }
}

function checkFields(event) {
  event.preventDefault();
  var noErrors = true;
  if (!getCategory()) {
    noErrors = false;
    categoryWarning.innerHTML = `<img src="./assets/warning.svg" alt="warning sign" id="warning"> A category is required.`;
  }
  for (var i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value) {
      noErrors = false;
      warningText[i].innerHTML = `<img src="./assets/warning.svg" alt="warning sign" id="warning"> A ${inputFields[i].name} is required.`;
    }
  }
  return noErrors;
}

function submitForm() {
  if (checkFields(event)) {
    newActivity = new Activity(getCategory(), taskDescriptionInput.value, minutesInput.value, secondsInput.value);
    showTimerView();
  }
}

function getCategory() {
  for (var i = 0; i < activityButtons.length; i++) {
    if (activityButtons[i].checked) {
      startTimerButton.classList.add(activityButtons[i].value.toLowerCase());
      return activityButtons[i].value;
    }
  }
  return false;
}

function showTimerView() {
  hide(formSubmit);
  show(timerDisplay);
  startTimerButton.innerText = "START";
  timerDescription.innerText = newActivity.description;
  activityHeader.innerText = "Current Activity";
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
  startTimerButton.disabled = true;
}

function logActivity(event) {
  if (event.target.id === "log-activity") {
    newActivity.saveToStorage();
    hide(timerDisplay);
    show(buttonContainer);
    activityHeader.innerText = "Completed Activity";
    renderSavedActivities();
  }
}

function renderSavedActivities() {
  if (localStorage.length) {
    hide(defaultText);
    activityCards.innerHTML = ``;
    var keyArray = Object.keys(localStorage);
    for (var i = 0; i < keyArray.length; i++) {
      var parsedActivity = JSON.parse(localStorage.getItem(keyArray[i]));
      activityCards.innerHTML += `
      <div class="activity-card">
        <div class="color-marker ${parsedActivity.category.toLowerCase()}-marker"></div>
        <p class="card-category"><b>${parsedActivity.category}</b></p>
        <p>${parsedActivity.timeFrame}</p>
        <p>${parsedActivity.description}</p>
      </div>
      `;
    }
  }
}

function removeLogButton(event) {
  if (event.target.id === "log-activity") {
    event.target.remove();
  }
}

function displayFormView() {
  removeActivation();
  formSubmit.reset();
  hide(buttonContainer);
  show(formSubmit);
  startTimerButton.disabled = false;
  var startColor = startTimerButton.classList[1];
  startTimerButton.classList.remove(startColor);
  activityHeader.innerText = "New Activity";
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}
