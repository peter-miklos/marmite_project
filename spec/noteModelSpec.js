function noteModelSpec() {
  describe("adding note", function() {
    var note = new Note("my new note");
    expect.isTrue(note.message === "my new note");
  });
}
