var myNotes = new MyNotes();

function createNoteOnClick() {
  var x;

  x = document.getElementById("a_note").value;

  console.log(myNotes.createNote(x));
  console.log(myNotes.notes);
  console.log("Note created successfully");
}
