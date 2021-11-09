import React, { Component } from 'react';
import Square from './game-square';

class Board extends Component {
  
  render() {
    return (
      <div>
        {
          this.props.squares.map((row, rowIndex) => (
            <div className="board-row">
              {row.map((col, colIndex) => <Square
                value={this.props.squares[rowIndex][colIndex]}
                onClick={() => this.props.onClick(rowIndex, colIndex)}
              />)}
            </div>)
          )
        }
      </div>
    );
  }
}

export default Board;