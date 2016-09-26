function MyNotes() {
  this.notes = [];
}

MyNotes.prototype = {
  createNote: function(message) {
    var note = new Note(message);
    this.notes.push(note);
  },

  listNotes: function() {
    return this.notes;
  }
};
