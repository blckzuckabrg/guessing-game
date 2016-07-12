

var message = "Welcome soldier"+"";
message = message+ " to The LBJ Guessing Game!";
var today = new Date();
today = "Today is " + "" + today;
alert(message);
document.write(today);
console.log(today);


var welcome = alert("Click the" + " "+"[Play Guessing Game]" +" "+ "button to continue!")
var correct = 0;
var posCorrect = correct++;
var total = posCorrect;

function yourName() {
    var person = prompt("Please enter your name", "Billy Jean");

    if (person != null) {
        //document.getElementById("demo").innerHTML =
        alert("Hello " + person + "! Lets start the Guessing Game!");
    }

    var myName = "Aaron";
    var player = prompt("What's is my name?");
    if(player == myName) {
      alert("That's correct");
      document.getElementById("1").textContent = "Correct: +1" ;
    }else {
      alert("That's incorrect, my name is Aaron!");
      document.getElementById("1").textContent = "Incorrect: -1" ;
    }


    var favoritePlayer = "Lebron James";
    var player = prompt("What's my favorite NBA basketball player?");
    if(player == favoritePlayer) {
      alert("That's correct");
      document.getElementById("2").innerHTML = "Correct: +1" ;
    }else {
      alert("That's incorrect, my favorite player is Lebron James!");
      document.getElementById("2").innerHTML = "Incorrect: -1";
    }

    var favoriteTeam = "Cleveland Cavaliers";
    var player = prompt("What's team does Lebron James play for?");
    if(player == favoriteTeam) {
      alert("That's correct");
      document.getElementById("3").innerHTML = "Correct: +1" ;
    }else {
      alert("That's incorrect, Lebron James plays for the Cleveland Cavaliers!");
      document.getElementById("3").innerHTML = "Inorrect: -1";
    }

    var championship = 3;
    var player =prompt("How many championships does Lebron James have so far? ");
    if(player == championship ){
      alert("That's correct!");
      document.getElementById("4").innerHTML = "Correct: +1" ;
    }else if(player < championship){
      alert("Guess is too low!");
      document.getElementById("4").innerHTML = "Incorrect: -1";
    }else{
      alert("Guess is too high!");
      document.getElementById("4").innerHTML = "Incorrect: -1";
    }
    document.getElementById("5").innerHTML = total;
}
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12){
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning';
} else {
    greeting = 'Welcome!';
}
