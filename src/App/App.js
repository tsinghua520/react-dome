import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

let element = <h2>我是h2标签</h2>
class App extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>this is my shopping list</h1>
        <ul>
          <li>my li one</li>
          <li>my li one</li>
          <li>my li one</li>
          <li>my li one</li>
        </ul>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
