var pause_continue =function() {
  var el = document.getElementById("pause_and_continue");
  if(el.value == "start"){
    el.value = "pause";
  }
  else{
    el.value = "start";
  }
}
