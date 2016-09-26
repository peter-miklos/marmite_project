function testAddingNote() {
  var note = new Note("my new note");
  expect.isTrue(note.message === "my new note");
}

testAddingNote();



// describe("Notes", function() {
//   var marmite;
//   var note;
//
//   beforeEach(function() {
//     marmite = new Marmite();
//   })
//
//   describe("add note", function() {
//     it("creates a note", function() {
//       marmite.addNote("This is my first note.");
//       expect(marmite._notes.length).toEqual(1);
//     })
//   })
// })
