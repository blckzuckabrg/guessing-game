

var message = "Welcome soldier"+"";
message = message+ " to The LBJ Guessing Game!";
var today = new Date();
today = "Today is " + "" + today;
alert(message);
document.write(today);
console.log(today);


var welcome = alert("Click the" + " "+"[Play Guessing Game]" +" "+ "button to continue!");
function yourName() {
    var person = prompt("Please enter your name", "Billy Jean");

    if (person != null) {
        //document.getElementById("demo").innerHTML =
        alert("Hello " + person + "! Lets start the Guessing Game!");
    }

    var myName = "Aaron";
    var player = prompt("What's the first name of this guessing game developer?");
    if((player.toLowerCase() == "Aaron") || (player.toLowerCase() == "aaron")) {
      alert("That's correct");
      document.getElementById("1").textContent = "Correct: +1" ;
      document.getElementById("1").className = "correct";
    }else {
      alert("That's incorrect, my name is Aaron!");
      document.getElementById("1").textContent = "Incorrect: -1" ;
      document.getElementById("1").className = "incorrect";
    }


    var favoritePlayer = "Lebron James";
    var player = prompt("What's my favorite NBA basketball player's fullname?");
    if((player.toLowerCase() == "lebron james") || (player.toLowerCase() == "Lebron James")) {
      alert("That's correct");
      document.getElementById("2").textContent = "Correct: +1" ;
      document.getElementById("2").className = "correct";
    }else {
      alert("Sorry, your guess was incorrect!");
      document.getElementById("2").textContent = "Incorrect: -1";
      document.getElementById("2").className = "incorrect";
    }

    var favoriteTeam = "Cleveland Cavaliers";
    var player = prompt("What's the fullname of the team that Lebron James play for?");
    if((player.toLowerCase() == "Cleveland Cavaliers") || (player.toLowerCase() == "cleveland cavaliers")) {
      alert("That's correct");
      document.getElementById("3").textContent = "Correct: +1" ;
      document.getElementById("3").className = "correct";
    }else {
      alert("Sorry, your guess was incorrect!!");
      document.getElementById("3").textContent = "Incorrect: -1";
      document.getElementById("3").className = "incorrect";
    }

    var dynasty = false;
    var championship = 3;
    var attempts = 0;
    while (dynasty == false) {
      var player = prompt("How many championships does Lebron James have so far in 2016? ");
      if(player == 3 ){
        alert("That's correct!");
        document.getElementById("4").textContent ="Correct: +1";
        document.getElementById("4").className = "correct";
        dynasty = true;

    }else{
      alert("Guess was Incorrect!");
      document.getElementById("4").textContent = "Attempts:", attempts++;
      var player =prompt("How many championships does Lebron James have so far? ");
    if(player < 3){
      alert("Ouch, close but guess is too low!");
      document.getElementById("4").textContent = "Attempts:", attempts++;
      document.getElementById("4").className = "incorrect";
    }else {
      alert("Sorry, guess is too high, try again!");
      document.getElementById("4").textContent = "Attempts:", attempts++ ;
      document.getElementById("4").className = "incorrect";
    }
  }
}

var shoeDeal = prompt("What company did Lebron James sign a billion dollar deal with:  Adidas, Nike, or Puma ?");
  if ((shoeDeal == "nike") || (shoeDeal == "Nike")) {
    alert("That's correct");
    document.getElementById("shoes").textContent = "Correct: +1";
    document.getElementById("shoes").className = "correct";
  }else  {
    alert("Sorry, your guess was incorrect!");
    document.getElementById("shoes").textContent = "Sorry, you guessed the wrong company!";
    document.getElementById("shoes").className = "incorrect";
  }

  var finals = ["2007 Loss", "2011 Loss", "2012 Won", "2013 Won", "2014 Loss", "2015 Loss", "2016 Won"];
  var finalsNum = finals.length;
  var finalsYear = 0;
  var msg = '';
  var i;
  var question = prompt("How many finals appearances does Lebron James have:\
  choose a number between 1-10?");
  if(question == 7){
    alert("That's correct");
    document.getElementById("correct").textContent = "Correct: +1",   appearances();
    document.getElementById("correct").className = "correct";


  }else if (question > 7){
    alert("That's incorrect");
    document.getElementById("correct").textContent = "Sorry, your guess was incorrect!";
    document.getElementById("correct").className = "incorrect";
  }else {
    alert("Sorry, your guess was incorrect!");
    document.getElementById("correct").textContent = "Sorry, your guess was incorrect!!";
    document.getElementById("correct").className = "incorrect";
  }
  function appearances(){
  for (var i = 0; i < finalsNum; i++) {
    finalsYear = ( i + 1);
    msg += 'NBA Finals Appearance' + finalsYear + ':' + " ";
    msg += finals[i] + '<br />';
    document.getElementById("answer").innerHTML = msg;
    document.getElementById("answer").className = "correct";
    }
  }
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
