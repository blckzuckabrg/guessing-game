// Welcome alert message when first visiting the site
var message = "Welcome soldier"+"";
message = message+ " to The LBJ Guessing Game!";
message += "Click the" + " "+"[Play Guessing Game]" +" "+ "button to continue!";
var today = new Date();
today = "Today is " + "" + today;
alert(message);
document.write(today);
console.log(today);


// Starts the function of the game questions
function yourName() {
    var person = prompt("Please enter your name", "Billy Jean");
    if (person != null) {
        alert("Hello " + person + "! Lets start the Guessing Game!");
    }


    // First question
    var myName = "Aaron";
    var player = prompt("What's the first name of this guessing game developer?");
    var Construction = '<img src="like.png">';
    var Construction1 = '<img src="dislike.png">';
    if((player.toLowerCase() == "Aaron") || (player.toLowerCase() == "aaron")) {
      alert("That's correct");
      document.getElementById("1").innerHTML = "Correct: +1" + Construction ;
      document.getElementById("1").className = "correct";
    }else {
      alert("That's incorrect, my name is Aaron!");
      document.getElementById("1").innerHTML = "Incorrect: -1" + Construction1 ;
      document.getElementById("1").className = "incorrect";
    }


    // Second question
    var favoritePlayer = "Lebron James";
    var player = prompt("What's my favorite NBA basketball player's fullname?");
    if((player.toLowerCase() == "lebron james") || (player.toLowerCase() == "Lebron James")) {
      alert("That's correct");
      document.getElementById("2").innerHTML = "Correct: +1" + Construction ;
      document.getElementById("2").className = "correct";
    }else {
      alert("Sorry, your guess was incorrect!");
      document.getElementById("2").innerHTML = "Incorrect: -1" + Construction1;
      document.getElementById("2").className = "incorrect";
    }


    // Third question
    var favoriteTeam = "Cleveland Cavaliers";
    var player = prompt("What's the fullname of the team that Lebron James play for?");
    if((player.toLowerCase() == "Cleveland Cavaliers") || (player.toLowerCase() == "cleveland cavaliers")) {
      alert("That's correct");
      document.getElementById("3").innerHTML = "Correct: +1" + Construction ;
      document.getElementById("3").className = "correct";
    }else {
      alert("Sorry, your guess was incorrect!!");
      document.getElementById("3").innerHTML = "Incorrect: -1" + Construction1;
      document.getElementById("3").className = "incorrect";
    }


    // Fourth question
    var dynasty = false;
    var championship = 3;
    var attempts = 0;
    attempts++;
    while (dynasty == false) {
      var player = prompt("How many championships does Lebron James have: 1, 2, 3 or 4?");
      if(player == 3 ){
        alert("That's correct!");
        document.getElementById("4").innerHTML ="Correct: +1" + Construction;
        document.getElementById("4").className = "correct";
        dynasty = true;
    }else if(player < 3){
      alert("Ouch, close but guess is too low!");
      document.getElementById("4").textContent = "Attempts:"+ attempts++;
      document.getElementById("4").className = "incorrect";
    }else if(player > 3){
      alert("Sorry, guess is too high, try again!");
      document.getElementById("4").textContent = "Attempts:"+ attempts++ ;
      document.getElementById("4").className = "incorrect";
    }
}


    // Fifth question
    var Construction = '<img src="like.png">';
    var Construction1 = '<img src="dislike.png">';
    var shoeDeal = prompt("What company did Lebron James sign a billion dollar deal with:  Adidas, Nike, or Puma ?");
    if ((shoeDeal == "nike") || (shoeDeal == "Nike")) {
      alert("That's correct");
      document.getElementById("shoes").innerHTML = "Correct: +1" + Construction;
      document.getElementById("shoes").className = "correct";
   }else {
      alert("Sorry, your guess was incorrect!");
      document.getElementById("shoes").innerHTML = "Incorrect: -1" + Construction1;
      document.getElementById("shoes").className = "incorrect";
    }


    // Sixth question
    var finals = ["2007 Loss", "2011 Loss", "2012 Won", "2013 Won", "2014 Loss", "2015 Loss", "2016 Won"];
    var finalsNum = finals.length;
    var finalsYear = 0;
    var msg = '';
    var i;
    var question = prompt("How many finals appearances does Lebron James have:\
    choose a number (5 or 7)?");
    if(question == 7){
      alert("That's correct");
      document.getElementById("correct").innerHTML =  "Correct: +1" + Construction;
      document.getElementById("correct").className = "correct";
   }else {
      alert("Sorry, your guess was incorrect!");
      document.getElementById("correct").innerHTML = "Incorrect: -1" + Construction1;
      document.getElementById("correct").className = "incorrect";
    }
 }


// Function that shows all the Lebron James finals appearances
function appearances(){
var msg = '';
var i;
for (var i = 0; i < finalsNum; i++) {
  finalsYear = ( i + 1);
  msg += 'NBA Finals Appearance' + finalsYear + ':' + " ";
  msg += finals[i] + '<br />';
  document.getElementById("correct").innerHTML = msg;
  }
}


// Shows the time and date of the time visited
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
