
var remove_content_start = document.getElementById("slide-outer");

var startscherm_content;

var body = document.getElementById('introductie');

function main() {
  checkFirstVisitor();
  body.style.display = "block";
}

function check_returning_visitor() {
  localStorage.setItem("startscherm_content_ls", true);
  checkFirstVisitor();

}

function checkFirstVisitor() {
  startscherm_content = JSON.parse(localStorage.getItem("startscherm_content_ls"));

 if(startscherm_content){
    remove_content_start.style.display = "none";

    window.setTimeout(function () {
        location.href = "/basis/basis_start.html";
    }, 1000);
  }
}

main();
