// import React from 'react';
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { render } from '@testing-library/react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Let's try something different!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React - Fundamentals
//         </a>
//       </header>
//     </div>

class App extends Component{ 
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    }
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios.get('https://api.randomuser.me').then(response =>  this.setState({
      users: response.data.results,
      loading: false
      })
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return <div className='App'>
      <h1>Hello World</h1>
      {!this.state.loading ? this.state.users.map(user => 
        <div>
        <h1>{user.name.first}</h1>
        <p>{user.email}</p>
        </div>)
        : 'loading'}
    
      </div>
  }
}

export default App;

