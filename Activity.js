class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.id = Date.now();
    this.time = parseInt(this.minutes) * 60 + parseInt(this.seconds);
    this.timeFrame = `${minutes} MIN ${seconds} SECONDS`;
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
      startTimer.insertAdjacentHTML("afterend", `<button class="log-activity" id="log-activity">LOG ACTIVITY</button>`);
      timer.innerText = "Well done!";
      return;
    }
  }

  markComplete() {
    //  Method is invoked when clicking 'log activity' button
    //  Timer display should be hidden
    //  New button appears reading 'Create new activity'
    //  Header changes to 'Completed Activity'
      //  Create cards for past activities

      // <div class="activity-card">
      //   <div class="color-marker"></div>
      //   <p class="card-category"><b>Category</b></p>
      //   <p>Time</p>
      //   <p>Description</p>
      // </div>
  }

  saveToStorage() {

  }
}

module.exports = Activity;
