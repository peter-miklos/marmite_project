function DisplayingMenuTest() {
  window.onload = function (){
    document.getElementById("test_div").innerHTML = '<div id="add_note"></div>';
    displayAddNoteMenu();
    expect.isTrue(document.getElementById("add_note").innerHTML === '<input id="a_note"><button id="submit_button" type="button" onclick="createNoteOnClick()">Create</button>');
  };
};

DisplayingMenuTest();
