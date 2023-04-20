import React from 'react';
import github_image from './github-mark.png';
import './App.css';
import MainInterests from './Components/MainInterests';

const App = () => {
    const MainInterestsNames = ["Rust", "TypeSystem", "Compiler"];
    return (
        <div>
            <header className="App-header">
            <h1> Kenta7777's Portfolio </h1>
    
            <h2>About Me</h2>
            <p>I'm Kenta7777, newbie software engineer.</p>
            <p> <a rel="noreferrer" target="_blank" href="https://github.com/kenta7777"> <img src={github_image} alt="GitHub"></img> </a> </p>
    
            <h2>Main Interests</h2>
            <MainInterests names={MainInterestsNames} />
            </header>
        </div>
    );
}

export default App;
