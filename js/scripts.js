// it's business time logic
var latinize = function(words) {
  var array = [];
  words.forEach(function(word) {
    if (word[0].toUpperCase() === "Q" && word[1].toUpperCase() === "U") {
      word = word.slice(2) + word[0] + word[1];
    }
    else if (word[0].toUpperCase() !== "A" && word[0].toUpperCase() !== "E" && word[0].toUpperCase() !== "I" && word[0].toUpperCase() !== "O" && word[0].toUpperCase() !== "U"){  //the logic here is that if word[0] is set to a lowercase letter, any uppercase letter entered by the user won't return the proper result.  Here, to fix that, we could either do a whole other set of comparisons with capitals.  This logic means that word[0], uppercased, will work, as well as the small letter that we uppercased.  Both work.
      word = word.slice(1) + word[0]; //1st pass - if not a vowel, the first consonant (the zeroth place, ie word[0]) will slice off and go to the end.
    }
    if (word[0].toUpperCase() === "Q" && word[1].toUpperCase() === "U") {
      word = word.slice(2) + word[0] + word[1];
    }
    else if (word[0].toUpperCase() !== "A" && word[0].toUpperCase() !== "E" && word[0].toUpperCase() !== "I" && word[0].toUpperCase() !== "O" && word[0].toUpperCase() !== "U" && word[0].toUpperCase() !== "Y"){
      word = word.slice(1) + word[0]; //2nd pass - if the new word[0], (zeroth place), is still a consonant, the same operation will happen. "Y" is now included because once it is not the 1st letter, it is considered a vowel. If there was a Y in the word, it was sliced in pass one above.
        }
    if (word[0].toUpperCase() === "Q" && word[1].toUpperCase() === "U") {
      word = word.slice(2) + word[0] + word[1];
    }
     else if (word[0].toUpperCase() !== "A" && word[0].toUpperCase() !== "E" && word[0].toUpperCase() !== "I" && word[0].toUpperCase() !== "O" && word[0].toUpperCase() !== "U" && word[0].toUpperCase() !== "Y"){
      word = word.slice(1) + word[0]; //3rd pass - repeat.  Further passes will happen below until no consonants remain.
    }
    if (word[0].toUpperCase() === "Q" && word[1].toUpperCase() === "U") {
      word = word.slice(2) + word[0] + word[1];
    }
    else if (word[0].toUpperCase() !== "A" && word[0].toUpperCase() !== "E" && word[0].toUpperCase() !== "I" && word[0].toUpperCase() !== "O" && word[0].toUpperCase() !== "U" && word[0].toUpperCase() !== "Y"){
      word = word.slice(1) + word[0];
    }
    if (word[0].toUpperCase() === "Q" && word[1].toUpperCase() === "U") {
      word = word.slice(2) + word[0] + word[1];
    }
    else if (word[0].toUpperCase() !== "A" && word[0].toUpperCase() !== "E" && word[0].toUpperCase() !== "I" && word[0].toUpperCase() !== "O" && word[0].toUpperCase() !== "U" && word[0].toUpperCase() !== "Y"){
      word = word.slice(1) + word[0];
    }
    word = word + "ay";
    array.push(word);
  });
  array = array.join(" ");
  return array;
}

// user interface logic
$(document).ready(function()  {

  $("form#pigInput").submit(function(event) {
    event.preventDefault();
    var phrase = $("#input").val();
    var words = phrase.split(" ");
    var latin = latinize(words);

    $(".output").text(latin);
    $("#result").show();
  });
});
