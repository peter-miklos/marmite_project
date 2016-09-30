function interfaceSpec() {

  describe("displaying an empty list of notes", function() {
    document.getElementById("test_div").innerHTML = '<div id="list_of_notes"></div>';
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === "<h1>Notes</h1><div><ul></ul></div>");
  });

  describe("creating and displaying a list of notes with 2 items", function() {
    document.getElementById("test_div").innerHTML = '<div id="note_content"></div><div id="add_note"></div><div id="start_page"></div><div id="list_of_notes"></div>';
    createNote("first note");
    createNote("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    displayListOfNotes();
    expect.isTrue(document.getElementById("list_of_notes").innerHTML === '<h1>Notes</h1><div><ul><li><a href="#" id="note_id_0">first note...</a></li><li><a href="#" id="note_id_1">Lorem ipsum dolor si...</a></li></ul></div>');
  });

  describe("displaying a single note", function(){
    document.getElementById("test_div").innerHTML = '<div id="note_content"></div><div id="add_note"></div><div id="start_page"></div><div id="list_of_notes"></div>';
    createNote("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    displayNote(2);
    expect.isTrue(document.getElementById("note_content").innerHTML === "<h1>Note - 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>");
  });

  describe("testing note creation and storing", function() {
    var myNotes = new MyNotes();
    var message = "my second note";
    myNotes.createNote(message);
    expect.isTrue(myNotes.notes[0].message === message);
  });
  }
