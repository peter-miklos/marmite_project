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

  // (function(description) {
  //   var old = console.log;
  //   var logger = document.getElementById("log")
  //   if (typeof description == 'object') {
  //     logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(description) : description) + '<br />';
  //   } else {
  //     logger.innerHTML += description + '<br />';
  //   }
  // })();

// function describe(description, test) {
//   console.log(description);
//   test();
// }

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
