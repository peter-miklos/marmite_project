function testNoteCreationAndStoring() {
  var myNotes = new MyNotes();
  var message = "my second note"
  myNotes.createNote(message);
  expect.isTrue(myNotes.notes[0].message === message);
}

testNoteCreationAndStoring();
