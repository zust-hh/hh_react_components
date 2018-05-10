import React, { Component } from 'react';
import './App.css';
import Star from './components/star'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starValue: 0,
    }
  }

  changeStarValueHandle = (value) => {
    this.setState({
      starValue: value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Star value={this.state.starValue} size='30' animate='0.3' changeStarValue = {value => this.changeStarValueHandle(value)} />
        </div>
      </div>
    );
  }
}

export default App;
