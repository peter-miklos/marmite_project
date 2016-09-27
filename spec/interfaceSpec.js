describe("creating a note on click", function() {
  var myNotes = new MyNotesDouble();
  var message = "hello there";
  var Note = new NoteDouble(message);
  expect.isTrue(myNotes.createNote(message) === message);
});

describe("displaying a menu", function() {
  window.onload = function (){
    document.getElementById("test_div").innerHTML = '<div id="add_note"></div>';
    displayAddNoteForm();
    expect.isTrue(document.getElementById("add_note").innerHTML === '<input id="a_note"><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>');
  };
});

describe("displaying an empty list of notes", function() {
  setTimeout(function() {
    document.getElementById("test_div").innerHTML = '<div id="list_of_notes"></div>';
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === "<div><ul></ul></div>");
  }, 200)
});

describe("displaying a list of notes with 2 items", function() {
  setTimeout(function() {
    document.getElementById("test_div").innerHTML = '<div id="list_of_notes"></div>';
    createNote("first note");
    createNote("second note");
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === "<div><ul><li>first note</li><li>second note</li></ul></div>");
  }, 300)
});
