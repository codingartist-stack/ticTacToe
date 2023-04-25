console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

//1. store the gameboard as an array inside of a gameboard object
//module

const TicTacToeApp = (() => {
  // init
  const HEIGHT = 3;
  const WIDTH = 3;
  const board = [];

  for (let i = 0; i < HEIGHT; i++) {
    board.push(new Array(WIDTH));
  }

  const players = [Player('player1', 'X'), Player('player2', 'O')];

  function Player(name, marker) {
    const playerName = name;
    const greeting = `I'm ${playerName}`;
    return {
      marker: marker,
      greeting,
    };
  }

  const addX = (i, j) => {
    board[i][j] = 'X';
    this.render();
  };

  const addO = (i, j) => {
    board[i][j] = 'O';
    this.render();
  };

  const render = () => {
    for (let i = 0; i < HEIGHT; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      gameBoard.appendChild(rowDiv);
      for (let j = 0; j < WIDTH; j++) {
        const cell = document.createElement('div');
        rowDiv.appendChild(cell);
      }
    }
  };

  return {
    board: board,
    addX: addX,
    addO: addO,
    render: render,
    players: players,
  };
})();

TicTacToeApp.render();
//2. Your players are also going to be stored in objects,
// and you’re probably going to want an object to control the flow of the game itself.
//factories

//place markers

//check for win
//check for draw

//display results message
