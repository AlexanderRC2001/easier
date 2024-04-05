
var speakWord = "Hello";

function helloSpeaker(names) {
  console.log(speakWord + " " + names);
}

var speakWord2 = "Good Bye";

function byeSpeaker(names) {
  console.log(speakWord2 + " " + names);
}

(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0);

    if (firstLetter === "J"|| firstLetter === "j") {
      byeSpeaker(names[i]);
    } else {
      helloSpeaker(names[i]);
    }
  }
})();