var player = prompt("What's your favorite NBA basketball player?:", "");
alert("Wow, "  + player + " " + "is a great player. He made a incredible mark in history!");

var teamName = prompt("Do you have a favorite NBA team?:", "");
alert("It's cool that you like" + " " + teamName+ " " + "but I would have to disagree lol!");

var moment = prompt("Lastly, what's your best moment in your players career?:", "");
alert("That was a great moment in his career!");

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

var message = "Welcome to my web page";
message = message+ "It's a work in progress.";
var today = new Date();
today = "Today is " + "" + today;
alert(message);
document.write(today);
console.log(today);



document.write('<h3>' + greeting + '</h3>');
