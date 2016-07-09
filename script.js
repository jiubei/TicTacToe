function gameStart() {

  var turns = 1;
  var blocks = document.querySelectorAll(".block");

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click",onClick);
  }

  // on click add either "x" or "o" to the block
  function onClick() {
    if(turns%2 === 0) {
      this.innerText = "X";
      this.class = "X";
      turns++;
    } else {
      this.innerText = "O";
      this.class = "O";
      turns++;
    }

  this.removeEventListener("click",onClick);
  victory();
  }



function victory() {
  if  ((a1.class == "X" && a2.class == "X" && a3.class == "X") ||
      (b1.class == "X" && b2.class == "X" && b3.class == "X") ||
      (c1.class == "X" && c2.class == "X" && c3.class == "X") ||
      (a1.class == "X" && b1.class == "X" && c1.class == "X") ||
      (a2.class == "X" && b2.class == "X" && c2.class == "X") ||
      (a3.class == "X" && b3.class == "X" && c3.class == "X") ||
      (a1.class == "X" && b2.class == "X" && c3.class == "X") ||
      (a3.class == "X" && b2.class == "X" && c1.class == "X"))

      {window.alert("Player 2 Wins!");
      window.location.reload();
    }
      else if
      ((a1.class == "O" && a2.class == "O" && a3.class == "O") ||
      (b1.class == "O" && b2.class == "O" && b3.class == "O") ||
      (c1.class == "O" && c2.class == "O" && c3.class == "O") ||
      (a1.class == "O" && b1.class == "O" && c1.class == "O") ||
      (a2.class == "O" && b2.class == "O" && c2.class == "O") ||
      (a3.class == "O" && b3.class == "O" && c3.class == "O") ||
      (a1.class == "O" && b2.class == "O" && c3.class == "O") ||
      (a3.class == "O" && b2.class == "O" && c1.class == "O"))

      {window.alert("Player 1 Wins!");
      window.location.reload();
    }
      else if (turns === 10)
      {window.alert("Draw Game!");
    window.location.reload();}
    }


}
gameStart();
