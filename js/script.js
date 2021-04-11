function init() {
//add your javascrip between these two lines of code
  var entry = document.getElementById("entrybutton");
  function myFunction() {
    var textBox = document.getElementById("entryinput");
    var output = document.getElementById("textoutput");
    alert("Andy Qiao: " + textBox.value);
    output.innerHTML = textBox.value;
  }
  entry.addEventListener('click', myFunction);
}
window.addEventListener('load', init);