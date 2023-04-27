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
  let board = [];
  const HEIGHT = 3;
  const WIDTH = 3;

  // render board
  const render = () => {
    gameBoard.innerHTML = '';
    for (let i = 0; i < HEIGHT; i++) {
      const column = document.createElement('div');
      column.classList.add('column');
      gameBoard.appendChild(column);
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
        column.appendChild(cell);
      }
    }
  };

  const addX = (i, j) => {
    board[i][j] = 'X';
    render();
  };

  const clearBoard = () => {
    board = [];
    for (let i = 0; i < HEIGHT; i++) {
      board.push(new Array(WIDTH));
    }
    render();
  };

  clearBoard();

  return {
    board: board,
    render: render,
    addX: addX,
    clearBoard: clearBoard,
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
