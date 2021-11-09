import React from 'react';
import Game from './game';

class Gamepanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3
    };
  }

  handleOnChange(e) {
    this.setState({
      size: parseInt(e)
    })
  }
  render() {
    return <div>
      <input type="number" min="3" max="10" placeholder="Board Size" onChange={(e) => this.handleOnChange(e.target.value)} />
      <Game key={this.state.size} size={this.state.size}>

      </Game>

    </div>

  }
}

export default Gamepanel;