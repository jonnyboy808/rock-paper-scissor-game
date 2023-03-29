var items = ["rock", "paper", "scissor"];

function random_item(items)
{
return items[Math.floor(Math.random()*items.length)];    
}


var compChoice = random_item(items)

console.log(compChoice)

var userChoice = prompt("Choose rock, paper, or scissor");
alert(userChoice + " is your selection.");
var userChoiceConfirmation = confirm("You selected " + userChoice +", is that correct?");
if (userChoiceConfirmation){
	alert(userChoice + " is your selection")
} else{
	alert("Looks like you are undecided");
}

alert("Computer chose " +compChoice);

switch(userChoice){
    case "rock":
        switch(compChoice){
            case "paper":
                alert("Computer won!");
                break;
            case "scissor": 
                alert("You Won!");
                break;
            case "rock":
                alert("Its a draw!");
                break;
        }   
        break;
        case "paper":
            switch(compChoice){
                case "paper":
                    alert("It's a draw!");
                    break;
                case "scissor": 
                    alert("Computer won!");
                    break;
                case "rock":
                    alert("You Won!");
                    break;
            }   
            break;
            case "scissor":
            switch(compChoice){
                case "paper":
                    alert("You won!");
                    break;
                case "scissor": 
                    alert("It's a draw!");
                    break;
                case "rock":
                    alert("Computer won!");
                    break;
            }   
            break;
}


