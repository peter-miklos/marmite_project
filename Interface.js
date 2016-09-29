window.onclick = function(e) {
  var clickTarget = e.target.id;
  if (clickTarget === "new_note") {
    _showNewNoteForm();
  } else if (clickTarget === "show_notes") {
    _showListOfNotes();
    displayListOfNotes();
  } else if (clickTarget.startsWith("note_id")) {
    _showNoteContent();
    var index = clickTarget.substring(8);
    displayNote(index);
  }
};
