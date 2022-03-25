buttonColors = ["red", "blue", "green", "yellow"];

gamePattern = [];
userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    // animatePress(userChosenColor);
    // checkAnswer(userChosenColor);
})

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // select button with same id as randomChosenColor
  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}