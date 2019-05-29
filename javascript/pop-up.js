//Pop-up

var pop_up = document.getElementById("pop-up-content");
var pop_up_btn = document.getElementById("pop-up-term");
var pop_up_close = document.getElementsByClassName("close")[0];

pop_up_btn.onclick = function() {
  pop_up.style.display = "block";
}

pop_up_close.onclick = function() {
  pop_up.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == pop_up) {
    pop_up.style.display = "none";
  }
}
