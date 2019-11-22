import React from 'react';
import './App.css';

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.textInput = React.createRef()
    this.state = {
      input: ""
    }
  }

  handleChange = () => {
    this.setState({
      input: this.textInput.current.value
    })
  }

  clearInput = () => {
    this.setState({
      input: ""
    })
    this.textInput.current.focus()
  }

  render(){
      return (
        <div className="App">
          <label htmlFor="name-input">Please input your name</label>
          <br />
          <input ref={this.textInput} value={this.state.input} onChange={this.handleChange}/>
          <br />
          <button onClick={() => this.textInput.current.focus()}>Set Input Field Focus</button>
          <button onClick={this.clearInput}>Clear Input Field</button>
        </div>
      );
    }
}