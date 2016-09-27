function testCreateNoteOnClick() {
  var myNotes = new MyNotesDouble();
  var message = "hello there";
  var Note = new NoteDouble(message);
  
  expect.isTrue(myNotes.createNote(message) === message);
}

testCreateNoteOnClick();
