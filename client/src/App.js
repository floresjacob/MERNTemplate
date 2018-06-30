import React, { Component } from "react";
import logo from "./logo.svg";
import axios from 'axios'
import "./App.css";

class App extends Component {
  state = {
    username: '',
    password: ''
  }
  
  

  testGet = () => {
    axios.get('/test')
    .then(r => {
      console.log(r)

    })
    .catch(e => {
      console.error(e)
    })
  }

  inputChange = event => {
    event.preventDefault();
    const {name, value} = event.target;
    //Updating the input's state
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`/users`, { 
      username: this.state.username,
      password: this.state.password 
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
        <label>
            Person Name:
            <input type="text" value = {this.state.username} name="username" onChange={this.inputChange} />
          </label>
          <input type="text" value={this.state.password} name="password" onChange={this.inputChange}></input>
          <button type="submit" onClick={this.handleSubmit}>Click Me</button>
        </form>
      </div>
    );
  }
}

export default App;
