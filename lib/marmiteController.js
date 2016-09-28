function displayTest(description) {
  var string_to_display = description;
  if (typeof description == 'object') {
      string_to_display += (JSON && JSON.stringify ? JSON.stringify(description) : description);
    }
  else {
      string_to_display = description;
  }
  document.getElementById("log").innerHTML += string_to_display + "<br>";
};

function describe(description, test) {
  displayTest(description);
  test();
};

var expect = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error ("Test failed: " + assertionToCheck + " is not truthy.");
    }
    else {
      displayTest("Test passed." + "<br>");
    }
  }
};
