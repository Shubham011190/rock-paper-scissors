var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById('userscore');
const compScore_span = document.getElementById('compscore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const smallUser = "user".fontsize(3).sub();
const smallComp = "comp".fontsize(3).sub();

function toWord(choice){
  if (choice=='r') return "Rock";
  if (choice=='s') return "Scissors";
  if (choice=='p') return "Paper";
}
function win(userChoice,compchoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${toWord(userChoice)}${smallUser} beats ${toWord(compchoice)}${smallComp} . You win!`;
  document.getElementById(toWord(userChoice).toLowerCase()).classList.add('green-glow');
  setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}
function lose(userChoice,compchoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${toWord(compchoice)}${smallComp} beats ${toWord(userChoice)}${smallUser} . You lose!`;
}
function draw(userChoice){
    result_p.innerHTML = `Both choose ${toWord(userChoice)}. It is a Draw!`;
}

function getCompChoice(){
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random()*3);
  return choices[randomNum];
}

function game(userChoice){
  const compchoice = getCompChoice();
  switch (userChoice + compchoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice,compchoice);
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChoice,compchoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice);
      break;
  }
}


function main(){
rock_div.addEventListener('click', function(){
  game('r');
})

paper_div.addEventListener('click', function(){
  game('p');
})

scissors_div.addEventListener('click',function(){
  game('s');
})
}
main();
