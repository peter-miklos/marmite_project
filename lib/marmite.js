  var expect = {
    isTrue: function(assertionToCheck) {
      if(!assertionToCheck) {
        throw new Error ("Test failed: " + assertionToCheck + " is not truthy.");
      }
      else {
        console.log("Test passed.");
      }
    }
  };

  function describe(description, test) {
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
    displayTest(description);
    test();
  }

  function MyNotesDouble() {

  }

  MyNotesDouble.prototype = {
    createNote: function(message) {
      return NoteDouble(message);
    }
  };

  function NoteDouble(message) {
    return message;
  }
