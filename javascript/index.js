
// Vue.component('Beginscherm', {
// template: `
// <div class="content container">
//   <img id="welkom_logo" src="public/afbeeldingen/logo_KVB.png">
// <h1>Welkom</h1>
//
// <p><span>Krachttraining Voor Beginners</span> is jouw bron van informatie over krachttraining en voeding.</p>
//
// <a href="introductie/introductie.html" target="_self">Laten we starten!</a>
// </div>
// `
// });

var app = new Vue({
  el: '#app',
})

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

$(document).ready(function(){
$(".unlock-btn").click(function(){
  $("#remove").removeClass("locked");
  // $("#remove-id").removeClass("warning");
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

function makeVisible(tabName) {
  console.log(tabName);
  var slider = document.getElementById(tabName);
  slider.className = "zichtbaar";
}

function makeInvisible() {
  for(var i = 0; i < sliderPs.length; i++) {
     sliderPs[i].className="onzichtbaar";
  }
}
