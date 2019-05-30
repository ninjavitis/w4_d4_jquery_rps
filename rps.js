$(document).ready(function(){

  //make class objects
  var choices = $('.choice');

  // make element objects
  var winStatusDisplay = $('#winStatus');
  var gameEndState = $('#gameEndState')
  var winsDisplay = $('#wins');
  var lossDisplay = $('#losses');
  var drawDisplay = $('#draws');
  var winRatioDisplay = $('#win_ratio');
  var playerDisplay = $('#player_selection');
  var cpuDisplay = $('#cpu_selection');
  var resultsDisplay = $('#results');
  

  // images used for rock, paper, scissors
  var rpsImages = [
    "https://media.giphy.com/media/xT9Igf2wBfQ8ClCDNC/giphy.gif", 
    "https://media.giphy.com/media/yUrUb9fYz6x7a/giphy.gif", 
    "https://media.giphy.com/media/fk3b5iSLqUhdm/giphy.gif"
  ];

  // set the initial state of the game
  var playerPick = 0;
  var cpuPick = 0;
  var playerSelection = "";
  var cpuSelection = "";
  var wins = 0;
  var losses = 0;
  var draws = 0;
  var winRatio = 0;
  var gamesPlayed = 0;

  resultsDisplay.hide();

  choices.on('click', function(){
    playerPick = this.id;
    playerDisplay.attr("src",rpsImages[playerPick]);

    cpuPick = Math.floor(Math.random()*3);
    cpuDisplay.attr("src", rpsImages[cpuPick]);

    resultsDisplay.show();

    if (playerPick == 0 && cpuPick == 1)
    { 
      winDisplay('lose');
    } 
      else if (playerPick == 0 && cpuPick == 2)
    {
      winDisplay('win');
    } 
      else if (playerPick == 1 && cpuPick == 0)
    { 
      winDisplay('win');
    } 
      else if (playerPick == 1 && cpuPick == 2)
    {
      winDisplay('lose');
    } 
      else if (playerPick == 2 && cpuPick == 0)
    {
      winDisplay('lose');
    } 
      else if (playerPick == 2 && cpuPick == 1)
    {
      winDisplay('win');
    } 
      else
    {
      winDisplay('draw');
    }

    gamesPlayed += 1;
    winsDisplay.text("Wins: " + wins);
    lossDisplay.text("Losses: " + losses);
    drawDisplay.text("Draw: " + draws);
    winRatioDisplay.text("Win Ratio: " + ((wins/gamesPlayed)*100).toFixed(2)+ "%")


  })

  function winDisplay(winStatus){
  switch(winStatus){
    case 'win':
      gameEndState.text('YOU WIN!').css({"color":"#9E00FF", "font-size":"75px"});
      wins++;
      break;
    case 'lose':
      gameEndState.text('YOU LOSE!').css({"color":"#FF5500", "font-size":"75px"});
      losses++;
      break;
    case 'draw':
      gameEndState.text('DRAW!').css({"color":"#06D0E4", "font-size":"75px"});
      draws++;
      break;
  }

  }


}) // end of document ready