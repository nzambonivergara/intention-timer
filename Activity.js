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
    //  Function uses minutes and seconds
      //  Minutes and seconds will be pulled from class instance
    //  Every time the function runs, time variable is decreased
      //  Declare time in constructor
        //  Time is number of minutes * 60 + seconds
    //  Reassign this.minutes and this.seconds to updated time
      //  this.minutes is reassigned to time variable / 60 to get minutes
    console.log(this.time);
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
      startTimer.innerText = "COMPLETE!";
      return;
    }
        //  uses Math.floor() to ensure seconds are not accounted for
    //  Reassign this.seconds to % 60

    //  var timer will need to display updated times through innerHTML
      //  function will update time through setInterval()
  }

  markComplete() {

  }

  saveToStorage() {

  }
}

module.exports = Activity;
