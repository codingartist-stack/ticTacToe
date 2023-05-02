console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoardContainer = document.getElementById('boardContainer');
const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

const TicTacToe = (() => {
  let board = [];
  const HEIGHT = 3;
  const WIDTH = 3;
  const Xclass = 'markX';
  const Oclass = 'markO';
  let Oturn = false;

  const render = () => {
    gameBoard.innerHTML = '';
    addHoverEffect();
    for (let i = 0; i < HEIGHT; i++) {
      const column = document.createElement('div');
      column.classList.add('column');
      gameBoard.appendChild(column);
      for (let j = 0; j < WIDTH; j++) {
        const cell = document.createElement('div');
        cell.classList.add('squares');
        column.appendChild(cell);

        const checkCell = (e) => {
          const addMark = e.target;
          const currentTurn = Oturn ? Oclass : Xclass;
          addMark.classList.add(currentTurn);
          //check win
          //check draw
          switchTurns();
          addHoverEffect();
        };

        cell.addEventListener('click', checkCell, { once: true });
      }
    }
  };

  const switchTurns = () => {
    Oturn = !Oturn;
  };

  const checkWin = () => {
    //check possible wins...
  };

  const checkDraw = () => {
    //all cells have a class added to them, but no win
  };

  //I want to add the hover class
  const addHoverEffect = () => {
    gameBoard.classList.remove('Oturn');
    gameBoard.classList.remove('Xturn');
    if (Oturn) {
      gameBoard.classList.add('Oturn');
    } else {
      gameBoard.classList.add('Xturn');
    }
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
    clearBoard: clearBoard,
    addHoverEffect: addHoverEffect,
  };
})();

TicTacToe.render();
