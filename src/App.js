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

  changeStarValue = (value) => {
    this.setState({
      starValue: value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Star value={this.state.starValue} length='5' size='50' animate='0.3' onChange = {value => this.changeStarValue(value)} />
        </div>
      </div>
    );
  }
}

export default App;
