var talking = false;
var transcript = '';
var listText = document.getElementById("list");
var micButton = document.getElementById("micbutton");

listText.style.display = "none";

if (!('webkitSpeechRecognition' in window)) {
  alert("Web Speech API is not supported by this browser. Please upgrade to Chrome version 25 or later.");
} else {
  var talker = new webkitSpeechRecognition();
  talker.continuous = true;

  talker.onstart = function(){
    talking = true;
    micButton.style.color = "#B6412C";
  }