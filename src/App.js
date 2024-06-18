// import React from 'react';
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { render } from '@testing-library/react';
import Loading from './Loading'


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
    };
    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios.get('https://api.randomuser.me').then(response =>  this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
   this. getUsers();
   console.log('more users loaded');
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const {loading, users} = this.state
    return <div className='App'>
      <h1>Hello World</h1>
      <form onSubmit={this.handleSubmit}>
          <input type='submit' value='load users' />
        </form>
      {!loading ? users.map(user => 
        <div key={user.login.uuid}>
        <h1 style={{color: 'red'}}>{user.name.first}</h1>
        <p>{user.email}</p>
      
        </div>)
        : <Loading message="nice nice" />}
    
      </div>
  }
}

export default App;

