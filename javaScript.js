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
        cell.id = i + ',' + j;

        column.appendChild(cell);

        cell.addEventListener('click', handleClick, { once: true });

        switch (board[i][j]) {
          case 'X':
            cell.classList.add(Xclass);
            break;
          case 'O':
            cell.classList.add(Oclass);
            break;
          default:
            break;
        }
      }
    }
  };

  const switchTurns = () => {
    Oturn = !Oturn;
  };

  const addToArray = (i, j) => {
    if (Oturn) {
      board[i][j] = 'O';
    } else {
      board[i][j] = 'X';
    }
    render();
    console.log(board);
  };

  const handleClick = (e) => {
    const addMark = e.target;
    const [i, j] = e.target.id.split(',').map((n) => parseInt(n));
    const currentTurn = Oturn ? Oclass : Xclass;
    addToArray(i, j);
    //check win
    checkWin();
    //check draw
    switchTurns();
    addHoverEffect();
  };

  const checkWin = () => {
    console.log('hey');
    //check possible wins...
  };

  const checkDraw = () => {
    //all cells have a class added to them, but no win
  };

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
  };
})();

TicTacToe.render();
