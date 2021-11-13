
    var options = ["paper", "rock", "lizard", "spock", "scissors"],
    result = [" ties ", " beats ", " loses to "],
    i = Math.floor(Math.random() * 5),
    randomChoice = options[i],
    userScore = 0,
    computerScore = 0,
    count = 0;
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
        count++;

        console.log(userScore, computerScore);
        console.log(choice1 + result[dif] + choice2); //spock beats rock
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("resultText").innerHTML = choice1 + result[dif] + choice2;
         document.getElementById("Players").innerHTML = `<div class='you'>You <i class="fas fa-hand-${choice1}"></i></div><div class='com'>Computer <i class="fas fa-hand-${choice2}"></i></div>`;
        // if user wins increment score
        // if computer wins increment computer score
        // if tie do nothing 
        if(count == 3){
            if(userScore <computerScore){
                document.getElementById('result').innerHTML = 'Computer Won';
            }
            else if(userScore>computerScore){
                 document.getElementById('result').innerHTML = 'You Won';
            }
            else{
                 document.getElementById('result').innerHTML = 'Game Tied';
            }
         

         document.getElementById('reset').click();
         document.getElementById('result').style.display='block'; 
         document.getElementById("startNew").style.display = 'block';
        userScore = 0;
        computerScore = 0;
        count = 0;
        document.getElementById("computerScore").innerHTML = '0';
        document.getElementById("userScore").innerHTML = '0';
        document.getElementById("resultText").innerHTML = '';
        document.getElementById("Players").innerHTML = '';
       
        }
    };
    
    stratNew = function(){
         document.getElementById('result').style.display='none'; 
        document.getElementById("computerScore").innerHTML = '0';
        document.getElementById("userScore").innerHTML = '0';
        document.getElementById("resultText").innerHTML = '';
         document.getElementById("Players").innerHTML = '';
        document.getElementById("continue").style.display = 'none';
        document.getElementById("startNew").style.display = 'none';
        userScore = 0;
        computerScore = 0;
        count = 0;
    }
    
    continue_fun = function(){
        
        document.getElementById("continue").style.display = 'none';
        document.getElementById("startNew").style.display = 'none';
    }
    
     close_bt = function(){
            document.getElementById("continue").style.display = 'block';
            document.getElementById("startNew").style.display = 'block';
    }
    
    