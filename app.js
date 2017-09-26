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

  talker.onend = function() {
    talking = false;
    micButton.style.color = "black";
  }

  talker.onresult = function(clip){
    transcript += clip.results[0][0].transcript;
    displayList(listSplitter(transcript));
  }
}

function startButton(event) {
  if (talking) {
    talker.stop();
    return;
  }
  transcript = '';
  talker.start();
}

function listSplitter(string) {
  return string.split(' and ');
}

function displayList(list) {
  listText.style.display = "block";
  var unordered = document.createElement('ul');
  listText.appendChild(unordered);