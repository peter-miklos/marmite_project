window.onload = function() {

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
        console.log("Test passed.");
      }
    }
  };

  function MyNotesDouble() {

  };

  MyNotesDouble.prototype = {
    createNote: function(message) {
      return NoteDouble(message);
    }
  };

  function NoteDouble(message) {
    return message;
  };
}
