var randomNumber1= Math.floor(Math.random() *6) +1;   //1-6

var randonDiceImage = "dice"  + randomNumber1 + ".png";   //dice1.png - dice6.png

var randomImageSource = "images/" + randonDiceImage;

var image1= document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);


var randomNumber2=Math.floor(Math.random() *6) +1;

var randonDiceImage = "dice"  + randomNumber2 + ".png";

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2= document.querySelectorAll("img") [1];

image2.setAttribute("src",  randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
}

 else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else 
document.querySelector("h1").innerHTML = "draw";


//var myName=  prompt("my name");
//alert("welcome  "+ myName); 