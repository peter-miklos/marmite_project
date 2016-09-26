function Note (message) {
  this.note = message;
}

Note.prototype = {
  printOut: function() {
    console.log(this.note);
  }
}
