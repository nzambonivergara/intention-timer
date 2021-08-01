class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.id = Date.now();
    this.time = parseInt(this.minutes) * 60 + parseInt(this.seconds);
  }

  startTimer() {
    if (this.time > -1) {
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time % 60;
      if (this.seconds < 10) {
          timer.innerText = `${this.minutes}:0${this.seconds}`;
        } else {
          timer.innerText = `${this.minutes}:${this.seconds}`;
        }
      this.time--;
    } else {
      console.log(this.time);
      clearInterval(countdown);
      startTimer.innerText = "COMPLETE!";
      return;
    }
  }

  markComplete() {

  }

  saveToStorage() {

  }
}

module.exports = Activity;
