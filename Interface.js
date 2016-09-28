var myNotes;

window.onclick = function(e) {
  var clickTarget = e.target.id;
  if (clickTarget === "new_note") {
    _showNewNoteForm();
    displayAddNoteForm();
  } else if (clickTarget === "show_notes") {
    _showListOfNotes();
    displayListOfNotes();
  } else if (clickTarget.startsWith("note_id")) {
    _showNoteContent();
    var index = clickTarget.substring(8);
    displayNote(index);
  }
};

function createNoteOnClick() {
  var noteDescription = document.getElementById("a_note").value;
  createNote(noteDescription);
}

function createNote(description) {
  myNotes.createNote(description);
  displayListOfNotes();
  setTimeout(function() {
    _showListOfNotes();
  }, 30)
}

function displayAddNoteForm() {
  if (myNotes === undefined) { myNotes = new MyNotes; }
  var addNoteHTMLContent= '<h1>Add new note</h1><textarea class="form-control" rows="5" id="a_note"></textarea><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>'
  document.getElementById("add_note").innerHTML = addNoteHTMLContent;
}

function displayListOfNotes() {
  if (myNotes === undefined) { myNotes = new MyNotes; }
  var listOfNotes = "<h1>Notes</h1><div><ul>";
  myNotes.listNotes().forEach(function(note, index) {
    listOfNotes += "<li><a href='#' id='note_id_" + index + "'>" + note.message.slice(0,20) + "</a></li>";
  })
  listOfNotes += "</ul></div>";
  document.getElementById("list_of_notes").innerHTML = listOfNotes;
}

function displayNote(index) {
  var currentNote = "<h1>Note - " + (parseInt(index) + 1) +"</h1><p>" + myNotes.listNotes()[index].message + "</p>";
  document.getElementById("note_content").innerHTML = currentNote;
}

function _showNoteContent() {
  list_of_notes.style.display = "none";
  start_page.style.display = "none";
  add_note.style.display = 'none';
  note_content.style.display = 'block';
}

function _showListOfNotes() {
  list_of_notes.style.display = "block";
  start_page.style.display = "none";
  add_note.style.display = 'none';
  note_content.style.display = 'none';
}

function _showNewNoteForm() {
  list_of_notes.style.display = "none";
  start_page.style.display = "none";
  add_note.style.display = 'block';
  note_content.style.display = 'none';
}
