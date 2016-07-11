function gameStart(){
  var turns = 1;
  var blocks = document.querySelectorAll(".block");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click",onClick);
  }
  // on click add either "x" or "o" to the block
  function onClick() {
    if(turns%2 === 0) {
    this.innerText = "X";
  } else {
    this.innerText = "O";
  }
    turns++;
  }
}

gameStart();
