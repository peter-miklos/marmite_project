
  function MyNotesDouble() {

  };

  MyNotesDouble.prototype = {
    createNote: function(message) {
      return NoteDouble(message);
    }
  };

  function NoteDouble(message) {
    return message;
  };

window.onload = function(){
    noteModelSpec();
    myNotesSpec();
    interfaceSpec();
}
