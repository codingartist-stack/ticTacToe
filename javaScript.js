console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

//1. store the gameboard as an array inside of a gameboard object
//module

const TicTacToe = (() => {
  const board = [];
  const heigth = 3;
  const width = 3;

  for (let i = 0; i < heigth; i++) {
    board.push(new Array(width));
  }

  // render board

  return {
    board,
  };
})();

//2. Your players are also going to be stored in objects,
// and you’re probably going to want an object to control the flow of the game itself.
//factories

//place markers

//check for win
//check for draw

//display results message
