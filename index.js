for (var i = 0; i < document.querySelectorAll(".drum").length; i++) { //loop which runs from 0 --> amount of buttons with class .drum

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //adds EventListener to all buttons and listens for a click and runs function upon user click

      makeSound(this.innerHTML);

    }
  );
}


document.addEventListener("keydown", function(e) {

  makeSound(e.key);

});

function makeSound(key) {

  switch (key) {
    case "W":
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
      break;

    case "J":
      var snare = new Audio('sounds/snare.mp3')
      snare.play();
      break;

    case "K":
      var kickBass = new Audio('sounds/kick-bass.mp3')
      kickBass.play();
      break;

    case "L":
      var crash = new Audio('sounds/crash.mp3')
      crash.play();
      break;

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3')
      snare.play();
      break;

    case "k":
      var kickBass = new Audio('sounds/kick-bass.mp3')
      kickBass.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3')
      crash.play();
      break;


    default:
      console.log(key)

  };
}
