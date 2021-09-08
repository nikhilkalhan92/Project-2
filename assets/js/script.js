console.log('loaded');


var options = ["paper", "rock", "lizard", "spock", "scissors"],
  result = [" ties ", " beats ", " loses to "],
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
      console.log(choice1 + result[dif] + choice2); //spock beats rock
  };

  var i = Math.floor(Math.random() * 5),
      randomChoice = options[i];


      