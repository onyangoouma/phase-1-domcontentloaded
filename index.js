// Your code goes here
document.addEventListener( "DOMContentLoaded", function () {
    changeText()
  } );
 
  function changeText() {
    const pText = document.getElementById( "text" )
      pText.innerHTML = "This is really cool!";
  }