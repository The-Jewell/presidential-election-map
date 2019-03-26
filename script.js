var createPolitician = function(name, partyColor) //creating factory function with parameter of name
{
  var politician = {}; // new blank object for politician 
    politician.name = name; //set name property to value of name parameter
    politician.electionResults = null;
    politician.voteTotal = 0;
    politician.partyColor = partyColor; //set color property to value of partyColor parameter
  
  politician.addVoteTotal = function () //method for tallying up votes for politician
  {
    this.voteTotal = 0;
      for (var i = 0; i < this.electionResults.length; i++)
        {
        this.voteTotal = this.voteTotal + this.electionResults[i]; 
        } 
  
  };
         
  return politician;
};

var donald = createPolitician("Donald Trump", [132, 17, 11]); //creating politican and assigning name parameter and party color parameter
var hilary = createPolitician("Hilary Clinton", [245, 141, 136]);//creating politican and assigning name parameter and party color parameter

//array for votes per state
donald.electionResults = [9,3,11,6,0,0,0,0,0,29,16,0,4,0,11,6,6,8,8,0,0,1,0,0,16,0,6,10,3,2,1,1,1,0,0,0,0,0,15,3,18,7,0,20,0,9,3,11,36,6,0,0,0,5,10,3];
//array for votes per state
hilary.electionResults = [0,0,0,0,55,9,7,3,3,0,0,3,0,20,0,0,0,0,0,2,1,0,10,11,0,10,0,0,0,0,0,0,0,6,4,14,5,29,0,0,0,0,7,0,4,0,0,0,0,0,3,13,8,0,0,0];

var setStateResults = function(state)
{
  theStates[state].winner = "null";
  if(donald.electionResults[state] > hilary.electionResults[state]){
    theStates[state].winner = donald;
  }else if(donald.electionResults[state] < hilary.electionResults[state]) {
    theStates[state].winner = hilary;
  } 
  var stateWinner = theStates[state].winner;
  if(stateWinner !== "null") {
    theStates[state].rgbColor = stateWinner.partyColor;
  }else{
    theStates[state].rgbColor = [11, 32, 57];
  }
 
 //creating variables for displaying text in the state table 
  var stateResultsTable = document.getElementById('stateResults');
  var header = stateResultsTable.children[0];
  var body = stateResultsTable.children[1];
  var stateName = header.children[0].children[0];
  var stateAbbrev = header.children[0].children[1];
  var candidate1Name=body.children[0].children[0];
  var candidate2Name= body.children[1].children[0];
  var candidate1Results= body.children[0].children[1];
  var candidate2Results= body.children[1].children[1];
  var winnerName= body.children[2].children[1];

//filling in each variable for the state table 
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = donald.name;
  candidate2Name.innerText = hilary.name;
  candidate1Results.innerText = donald.electionResults[state];
  candidate2Results.innerText = hilary.electionResults[state];

  if (theStates[state].winner === null){
    winnerName.innerText = "Draw";
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
};



//calling function  to add votes for each politician
donald.addVoteTotal();
hilary.addVoteTotal();

console.log(donald.voteTotal);
console.log(hilary.voteTotal);




//if/else statement to declare winner 
var winner = "???"
if (donald.voteTotal > hilary.voteTotal){
  winner = donald.name;
}else if (donald.voteTotal < hilary.voteTotal){
  winner = hilary.name;
}else {
  winner = "draw";
}

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

  row.children[0].innerText = donald.name; 
  row.children[1].innerText = donald.voteTotal;
  row.children[2].innerText = hilary.name;
  row.children[3].innerText = hilary.voteTotal;
  row.children[5].innerText = winner;
  


console.log("And the winner is... " + winner + "!!!!");
console.log("Donald Party color is " + donald.partyColor);


  
  
  
 






