
var remove_locked_basis = document.getElementById("remove_basis");
var remove_locked_oefeningen = document.getElementById("remove_oefeningen");
var remove_locked_voeding = document.getElementById("remove_voeding");

var basis_intro;
var oefeningen_intro;
var voeding_intro;

var body = document.getElementById('body_locked_content');

function main() {
  checkIntro();
  body.style.display = "block";
}

function finish_basis() {
  localStorage.setItem("basis_intro_ls", true);
  checkIntro();

}

function finish_oefeningen() {
  localStorage.setItem("oefeningen_intro_ls", true);
  checkIntro();
}

function finish_voeding() {
  localStorage.setItem("voeding_intro_ls", true);
  checkIntro();
}

function checkIntro() {
  basis_intro = JSON.parse(localStorage.getItem("basis_intro_ls"));
  oefeningen_intro = JSON.parse(localStorage.getItem("oefeningen_intro_ls"));
  voeding_intro = JSON.parse(localStorage.getItem("voeding_intro_ls"));

 if(basis_intro && remove_locked_basis){
    remove_locked_basis.classList.remove("locked");
  }

  if(oefeningen_intro && remove_locked_oefeningen)
  {
    remove_locked_oefeningen.classList.remove("locked");
  }

   if(voeding_intro && remove_locked_voeding){
      remove_locked_voeding.classList.remove("locked");
    }
}

main();
