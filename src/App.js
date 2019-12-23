import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  render() {
    let { volume } = this.state
    return (
      <>
        <h1 className="headerrange">Range Slider</h1>
        <div className="ranges">
          <p className="minvalue">0</p>
          <Slider className="slider"
            min={0}
            max={100}
            value={volume}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
          <p className="minvalue">100</p>
        </div>
      </>
    )
  }
}



export default App;
