//Collapsible

var collapsible = document.getElementsByClassName("collapse-heading");
var teller;

for (teller = 0; teller < collapsible.length; teller++) {
  collapsible[teller].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Verwijdert locked class wanneer er geklikt wordt op de laatste button per introductie-sectie

$(document).ready(function(){
$(".unlock-btn").click(function(){
  $("#remove").removeClass("locked");
});
});

//Tabs

var sliders = [
  "slide1",
  "slide2",
  "slide3",
  "slide4"
]

var currentTab = 0;

var sliderPs = document.getElementById("slide-outer").children;

function next() {
  currentTab++;
  makeInvisible();
  makeVisible(sliders[currentTab]);
}

function previous() {
  currentTab--;
  makeInvisible();
  makeVisible(sliders[currentTab]);
}

function makeInvisible() {
  for(var i = 0; i < sliderPs.length; i++) {
     sliderPs[i].className="onzichtbaar";
  }
}

function makeVisible(tabName) {
  var slider = document.getElementById(tabName);
  slider.className = "zichtbaar";
}
