var pop_up = document.getElementById("pop-up-content");
var pop_up_close = document.getElementsByClassName("close")[0];4
var locked_section = document.getElementsByClassName("btn-bottom")[0];
var i;

locked_section.onclick = function() {
  if (locked_section.classList.contains("locked")){
      pop_up.style.display = "block";
    }
  }

pop_up_close.onclick = function() {
  pop_up.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == pop_up) {
    pop_up.style.display = "none";
  }
}
