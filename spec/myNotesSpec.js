function myNotesSpec() {
  describe("testing note creation and storing", function() {
    var myNotes = new MyNotes();
    var message = "my second note";
    myNotes.createNote(message);
    console.log("i am running testing note creation and storing")
    expect.isTrue(myNotes.notes[0].message === message);
  });

  describe("list all notes", function() {
    var myNotes = new MyNotes();
    var noteOne = "note one";
    var noteTwo = "note two";
    myNotes.createNote(noteOne);
    myNotes.createNote(noteTwo);
    expect.isTrue(myNotes.listNotes().length === 2);
  });
}
