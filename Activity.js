class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.id = Date.now();
  }

  startTimer() {

  }

  markComplete() {

  }

  saveToStorage() {

  }
}

module.exports = Activity;
