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
  const HEIGHT = 3;
  const WIDTH = 3;

  for (let i = 0; i < HEIGHT; i++) {
    board.push(new Array(WIDTH));
  }

  // render board
  const render = () => {
    for (let i = 0; i < HEIGHT; i++) {
      const row = document.createElement('div');
      gameBoard.appendChild(row);
      for (let j = 0; j < WIDTH; j++) {
        const cell = document.createElement('div');
        cell.classList.add('squares');
        gameBoard.appendChild(cell);
      }
    }
  };

  return {
    board: board,
    render: render,
  };
})();

TicTacToe.render();
//2. Your players are also going to be stored in objects,
// and you’re probably going to want an object to control the flow of the game itself.
//factories

//place markers

//check for win
//check for draw

//display results message
