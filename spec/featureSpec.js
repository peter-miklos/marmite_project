function testCreateNote() {
  this.window.a_note = "note";
  this.window.submit_button.click();
  expect.isTrue(this.window.note_list === "note");
  expect.isTrue(this.window.note_confirmation === "Note has been stored");
  expect.isTrue(myNotes.notes.length === 1);
}

testCreateNote();

//
