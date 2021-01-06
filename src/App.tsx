import React from 'react';
import github_image from './github-mark.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Kenta7777's Portfolio </h1>

        <h2> About Me </h2>
        <p>I'm Kenta7777, newbie software engineer.</p>
        <p> <a href="https://github.com/kenta7777"> <img src={github_image} alt="GitHub"></img> </a> </p>

        <h2> My Works </h2>
        <p>TODO</p>

        <h2> Main Interests </h2>
        <ul> 
            <li> Rust </li>
            <li> Type System </li>
            <li> Compiler </li>
            <li> Operating System </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
