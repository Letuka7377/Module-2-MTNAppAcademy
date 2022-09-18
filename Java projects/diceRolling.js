const dice = document.getElementById('dice-btn');

function dicegame(){
    //DICE 1
    var randomDice =Math.floor((Math.random()*6)+1);
    var diceLocation = "img/"+"Dice-"+randomDice+".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    //DICE 2
    var randomDice2 =Math.floor((Math.random()*6)+1);
    var diceLocation2 = "img/"+"Dice-"+randomDice2+".png";
    var img1 = document.querySelectorAll("img")[1];
    img1.setAttribute("src", diceLocation2);

    if (randomDice > randomDice2){
        document.querySelector("h1").innerHTML="Best consumer solution Wins!🏆";
    }

    if (randomDice < randomDice2){
        document.querySelector("h1").innerHTML="Campus cup solution Wins!🏆";
    }

    else if (randomDice = randomDice2){
        document.querySelector("h1").innerHTML="🏆Match Draw!🏆";
    }

    else{
        document.querySelector("h1").innerHTML="something Error...";
    }

    //button text change
    dice.innerHTML="Play Again!"

}