function calculateDays() {
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
      var today = (100-days);
      var this_hour = (23-hours);
      var this_minute = (59-minutes);
      var this_second = (59-seconds);

      document.getElementById("result").innerHTML = "Day #" + today;
      // On the 99th Day Display the countdown to the Screen
      if( today === 99){
        document.getElementById("timer").innerHTML = this_hour + " Hours " + this_minute + " Minutes and " + this_second + " Secs "
            + " Since <span style='color:red'>Active</span>";
      }

      if (now === hundredthDay) {
        clearInterval(interval);
        document.getElementById("result").innerHTML = "100 Days Expired!";
        document.getElementById("timer").innerHTML = "Hours " + this_hour + " Minutes " +
         this_minute + " Sec " + this_second;
      }
    }, 1000);
}
