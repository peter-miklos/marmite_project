window.onload = function(){
describe("creating a note on click", function() {
  var myNotes = new MyNotesDouble();
  var message = "hello there";
  var Note = new NoteDouble(message);

  expect.isTrue(myNotes.createNote(message) === message);
});

describe("displaying the note form", function() {
  setTimeout(function () {
    document.getElementById("test_div").innerHTML = '<div id="add_note"></div>';
    displayAddNoteForm();
    expect.isTrue(document.getElementById("add_note").innerHTML === '<input id="a_note"><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>');
  }, 10);
});

describe("displaying an empty list of notes", function() {
  setTimeout(function() {
    document.getElementById("test_div").innerHTML = '<div id="list_of_notes"></div>';
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === "<div><ul></ul></div>");
  }, 10);
});

describe("displaying a list of notes with 2 items", function() {
  setTimeout(function() {
    document.getElementById("test_div").innerHTML = '<div id="list_of_notes"></div>';
    createNote("first note");
    createNote("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === "<div><ul><li>first note</li><li>Lorem ipsum dolor si</li></ul></div>");
  }, 20);
});

describe("displaying a single note", function(){
  setTimeout(function () {
    document.getElementById("test_div").innerHTML = '<div id="note_content"></div>';
    createNote("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    displayNote(2);
    expect.isTrue(document.getElementById("note_content").innerHTML === "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>");
  }, 30);
});
}
