function MyNotes(noteClass) {
  this.notes = [];
  this._noteClass = noteClass === undefined ? Note : noteClass;
}

MyNotes.prototype = {
  createNote: function(message) {
    var note = new this._noteClass(message);
    this.notes.push(note);
  },

  listNotes: function() {
    return this.notes;
  }
};
