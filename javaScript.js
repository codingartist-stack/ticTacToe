console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

//1. store the gameboard as an array inside of a gameboard object
//module

const TicTacToeApp = (() => {
  const board = [];
  for (let i = 0; i < 3; i++) {
    board.push(new Array(3));
  }

  const addX = (i, j) => {
    board[i][j] = 'X';
  };

  const addO = (i, j) => {
    board[i][j] = 'O';
  };

  for (const space of Object.values(board)) {
    const square = document.createElement('div');
    square.classList.add('squares');
    // gameBoard.appendChild(square);
  }

  return {
    board: board,
    addX: addX,
    addO: addO,
  };
})();

//2. Your players are also going to be stored in objects,
// and you’re probably going to want an object to control the flow of the game itself.
//factories

//place markers

//check for win
//check for draw

//display results message
