console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');

const TicTacToe = (() => {
  // console.log(this);
  let board = [];
  const HEIGHT = 3;
  const WIDTH = 3;
  const Xclass = 'markX';
  const Oclass = 'markO';
  let Oturn;

  // render board
  const render = () => {
    gameBoard.innerHTML = '';
    Oturn = false;
    for (let i = 0; i < HEIGHT; i++) {
      const column = document.createElement('div');
      column.classList.add('column');
      gameBoard.appendChild(column);
      for (let j = 0; j < WIDTH; j++) {
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

        const checkCell = (e) => {
          const addMark = e.target;
          const currentTurn = Oturn ? Oclass : Xclass;
          addMark.classList.add(currentTurn);
          //check win
          //check draw
          //switch turns
        };

        cell.addEventListener('click', checkCell, { once: true });
      }
    }
  };

  // const addX = (i, j) => {
  //   board[i][j] = 'X';
  //   render();
  // };

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
    // addX: addX,
    clearBoard: clearBoard,
  };
})();

TicTacToe.render();
