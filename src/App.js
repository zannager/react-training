import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  };
}

export default App;

