function displayTest(description) {
  var string_to_display = description;
  if (typeof description == 'object') {
      string_to_display += (JSON && JSON.stringify ? JSON.stringify(description) : description);
    }
  else {
      string_to_display = description;
  }
  document.getElementById("log").innerHTML += string_to_display + "<br>";
}

function describe(description, test) {
  displayTest(description);
  try {
    test();
  } catch (e) {
    displayTest("<font color='red'>Test failed with error: " + e + "</font> <br>");
  }
}

var expect = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      displayTest("<font color='red'>Test failed with error: " + assertionToCheck + "</font>");
    }
    else {
      displayTest("<font color='green'>Test passed." + "</font><br>");
    }
  }

};

function NoteDouble(message) {
  this.message = message
};
