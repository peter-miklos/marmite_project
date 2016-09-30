function myNotesSpec() {
  describe("testing note creation and storing", function() {
    var myNotes = new MyNotes(NoteDouble);
    var message = "my second note";
    myNotes.createNote(message);
    expect.isTrue(myNotes.notes[0].message === message);
  });

  describe("list all notes", function() {
    var myNotes = new MyNotes(NoteDouble);
    var noteOne = "note one";
    var noteTwo = "note two";
    myNotes.createNote(noteOne);
    myNotes.createNote(noteTwo);
    expect.isTrue(myNotes.listNotes().length === 2);
  });
}
