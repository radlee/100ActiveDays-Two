function calculateDays() {
    var workout = document.getElementById("work_out").value;
    var duration = document.getElementById("w_duration").value;

    var hundredthDay = new Date();

    hundredthDay.setDate(hundredthDay.getDate() + 100);

    var interval = setInterval(function() {
      var now = new Date();
      var distance = hundredthDay - now;
      console.log(distance);
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("result").innerHTML = days + " Days " + hours + " Hours " +
       minutes + " Minuutes " + seconds + " Seconds";
console.log("---now----");
console.log(now);
console.log("----hundredthDay----");
console.log(hundredthDay);
      if (now === hundredthDay) {
        clearInterval(interval);
        document.getElementById("result").innerHTML = "Kick-Off";
      }
    }, 1000);
}
