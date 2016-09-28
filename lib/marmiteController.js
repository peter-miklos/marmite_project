window.onload = function() {

function displayTest(description) {
  var string_to_display = description;
  if (typeof description == 'object') {
      string_to_display += (JSON && JSON.stringify ? JSON.stringify(description) : description);
    }
  else {
      string_to_display += description;
  }
  document.getElementById("log").innerHTML = string_to_display;
};



}
