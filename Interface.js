var myNotes = new MyNotes();

function createNoteOnClick () {
  var x;

  x = document.getElementById("a_note").value;

  myNotes.createNote(x);
  console.log(myNotes.notes);
  console.log("Note created successfully");
}

function displayAddNoteMenu() {



  document.getElementById("add_note").innerHTML = '<input id="a_note"><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>'



}
