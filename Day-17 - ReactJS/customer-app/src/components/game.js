import React from 'react';
import './game.css'
import Board from './game-board';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(props.size).fill(Array(props.size).fill(''))
        }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    let squares = current.squares.map((item) => [...item]);

    if (calculateWinner(squares) || squares[i][j] !== '') {
      return;
    }
    
    squares[i][j] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    console.log({ "current Sq.": current.squares });
    const winner = calculateWinner(current.squares);
    console.log(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            key={this.state.stepNumber}
            squares={current.squares}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const len = squares.length;
  // check all columns

  for (let i = 0; i < len; i++) {
    let cnt = { 'X': 0, 'O': 0, '': 0 };
    for (let j = 0; j < len; j++) {
      cnt[squares[j][i]]++;
    }
    if (cnt['X'] == len)
      return 'X';
    if (cnt['O'] == len)
      return 'O';
  }
  // check all rows
  for (let i = 0; i < len; i++) {
    let cnt = { 'X': 0, 'O': 0, '': 0 };
    for (let j = 0; j < len; j++) {
      cnt[squares[i][j]]++;
    }
    if (cnt['X'] == len)
      return 'X';
    if (cnt['O'] == len)
      return 'O';
  }

  // check all diagonals  
  let cnt = { 'X': 0, 'O': 0, '': 0 };
  // Checking top left to bottom right
  for (let i = 0; i < len; i++) {

    cnt[squares[i][i]]++;
  }
  if (cnt['X'] == len)
    return 'X';
  if (cnt['O'] == len)
    return 'O';

  cnt = { 'X': 0, 'O': 0, '': 0 };
  // Checking top right to bottom left
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    cnt[squares[j][i]]++;
  }
  if (cnt['X'] == len)
    return 'X';
  if (cnt['O'] == len)
    return 'O';
  // checking for tie
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {

      if (squares[i][j] === '')
        return null;
    }

  }

  return "Game Tied!";
}

export default Game;