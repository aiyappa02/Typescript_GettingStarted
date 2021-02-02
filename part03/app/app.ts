function startGame() {
  // starting a new game
let playerName : string = "Aiyappa";
logPlayer(playerName);

  let messagesElement = document.getElementById('messages'); // now messagesElement is both HTML ele and string
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name) {
  console.log(`New game starting for player : ${name}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame);