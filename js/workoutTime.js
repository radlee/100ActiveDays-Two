function calculateWorkout() {
    var workout = document.getElementById("work_out").value;
    var duration = document.getElementById("w_duration").value;


    var hundredthDay = new Date();
    //Set the Hundredth Day--
    hundredthDay.setDate(hundredthDay.getDate() + 100);

    var interval = setInterval(function() {
      var now = new Date();

      var distance = hundredthDay - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //Reset Current time to Zero and Start Countng Up to Day #100--
      var this_hour = (23-hours);
      var this_minute = (59-minutes);
      var this_second = (59-seconds);

      //Get the Time from the input to actual time--
      var duration_string = duration.toString();
      var array = duration_string.split(':');
      //Separate Hours from Minutes--

      var input_minutes = parseInt(array[1]);
      var input_hours = parseInt(array[0]);


      if(this_hour >= input_hours && this_minute >= input_minutes){
        var min;
        if(this_minute >= 2){
          min = "Minutes";
        }
         else{
          min = "Minute";
        }
        // document.getElementById("start_workout").style.visibility = "visible";
        document.getElementById("completed").innerHTML = "Completed " + workout + " " + this_hour + " Hours and " + this_minute + " " + min + " ago.";
        document.getElementById("workout_name").style.visibility = "hidden";
        document.getElementById("duration").style.visibility = "hidden";
      }
      else {


        // pause_continue();
        document.getElementById("start_quest").style.visibility = "hidden";
        // document.getElementById("start_workout").style.visibility = "hidden";
        document.getElementById("workout_name").innerHTML = "[ " + workout + " in progress ]";
        document.getElementById("duration").innerHTML = this_hour + " " + this_minute + " " + this_second;
        document.getElementById("timer_up").innerHTML = hours + " " + (input_minutes) + " " + this_second;
      }
    }, 1000);
}
