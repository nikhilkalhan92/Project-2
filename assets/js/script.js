
    var options = ["paper", "rock", "lizard", "spock", "scissors"],
result = [" ties ", " beats ", " loses to "],
i = Math.floor(Math.random() * 5),
randomChoice = options[i],
userScore = 0,
computerScore = 0,
bigBang = function(choice1, choice2) {
    var index1 = options.indexOf(choice1), //spock => 3
        index2 = options.indexOf(choice2), //rock=> 1
        dif = index2 - index1; // 1 - 3 => -2
    if(dif < 0) { // -2 < 0 => truthy
        dif += options.length; // -2 + 5 => 3
    }
    while(dif > 2) { //3 > 2 => truthy
        dif -= 2; // 3 - 2 => 1
    }
    i = Math.floor(Math.random() * 5);
    randomChoice = options[i];
    
    if(dif == 1) {
      userScore += 1; 
    }
    if(dif >= 2) {
      computerScore += 1; 
    }
    console.log(userScore, computerScore);
    console.log(choice1 + result[dif] + choice2); //spock beats rock
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("resultText").innerHTML = choice1 + result[dif] + choice2;
    // if user wins increment score
    // if computer wins increment computer score
    // if tie do nothing 
};