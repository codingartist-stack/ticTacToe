console.log('I am connected! ');
//Your main goal here is to have as little global code as possible.

const gameBoardContainer = document.getElementById('boardContainer');
const gameBoard = document.getElementById('board');
const winMessage = document.getElementById('winMessage');
const winText = document.getElementById('winText');
const resetButton = document.getElementById('restartButton');
const startReset = document.getElementById('startReset');

const TicTacToe = (() => {
  let board = [];
  const HEIGHT = 3;
  const WIDTH = 3;
  const Xclass = 'markX';
  const Oclass = 'markO';
  let Oturn = false;
  const Xwins = ['X', 'X', 'X'];
  const Owins = ['O', 'O', 'O'];

  const render = () => {
    gameBoard.innerHTML = '';
    addHoverEffect();
    for (let i = 0; i < HEIGHT; i++) {
      const column = document.createElement('div');
      column.id = `column` + i;
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

    switchTurns();
    addHoverEffect();
    //check draw
  };

  const checkWin = () => {
    console.log(`checking win`);
    //check possible wins...
    //if 0: ['X', 'X', 'X'] than X wins
    if (compareArray(board[0], Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(board[1], Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(board[2], Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(board[0], Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(board[1], Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(board[2], Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(backwardSlashDiagonal(), Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(backwardSlashDiagonal(), Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(forwardSlashDiagonal(), Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(forwardSlashDiagonal(), Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(firstRowwin(), Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(firstRowwin(), Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(secondRowWin(), Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(secondRowWin(), Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    } else if (compareArray(thirdRowWin(), Owins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'O Wins!';
    } else if (compareArray(thirdRowWin(), Xwins) === true) {
      winMessage.classList.add('show');
      winText.textContent = 'X Wins!';
    }
  };

  const compareArray = (a, b) => {
    return a.toString() === b.toString();
  };

  const firstRowwin = () => {
    let firstRow = [];
    for (let i = 0; i < 3; i++) {
      firstRow.push(board[i][0]);
    }
    return firstRow;
  };

  const secondRowWin = () => {
    let secondRow = [];
    for (let i = 0; i < 3; i++) {
      secondRow.push(board[i][1]);
    }
    return secondRow;
  };

  const thirdRowWin = () => {
    let thirdRow = [];
    for (let i = 0; i < 3; i++) {
      thirdRow.push(board[i][2]);
    }
    return thirdRow;
  };

  const backwardSlashDiagonal = () => {
    let bDiagonal = [];
    for (let i = 0; i < 3; i++) {
      bDiagonal.push(board[i][i]);
    }
    return bDiagonal;
  };

  const forwardSlashDiagonal = () => {
    let fDiagonal = [];
    for (let i = 0; i < 3; i++) {
      fDiagonal.push(board[i][2 - i]);
    }
    return fDiagonal;
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
    winMessage.classList.remove('show');
    winText.textContent = '';
    board = [];
    for (let i = 0; i < HEIGHT; i++) {
      board.push(new Array(WIDTH));
    }

    render();
  };

  clearBoard();

  startReset.addEventListener('click', clearBoard, true);
  resetButton.addEventListener('click', clearBoard, true);

  return {
    board: board,
    render: render,
    clearBoard: clearBoard,
  };
})();

TicTacToe.render();
