console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

//1. store the gameboard as an array inside of a gameboard object
//module

const TicTacToe = (() => {
  console.log(this);
  const board = [];
  const HEIGHT = 3;
  const WIDTH = 3;

  for (let i = 0; i < HEIGHT; i++) {
    board.push(new Array(WIDTH));
  }

  // render board
  const render = () => {
    gameBoard.innerHTML = '';
    for (let i = 0; i < HEIGHT; i++) {
      const row = document.createElement('div');
      gameBoard.appendChild(row);
      for (let j = 0; j < WIDTH; j++) {
        // we're creating the cell at coordinates [i][j]
        // what's the state of the board at that coordinate?
        const cell = document.createElement('div');
        cell.classList.add('squares');

        switch (board[i][j]) {
          case 'X':
            cell.classList.add('markX');
            break;
          case 'O':
            cell.classList.add('markO');
            break;
          default:
            break;
        }
        row.appendChild(cell);
      }
    }
  };

  const addX = (i, j) => {
    board[i][j] = 'X';
    render();
  };

  return {
    board: board,
    render: render,
    addX: addX,
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
