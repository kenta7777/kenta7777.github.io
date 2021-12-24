import React from 'react';
import github_image from './github-mark.png';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <h1> Kenta7777's Portfolio </h1>
        
                <Header2 name="About Me"/>
                <p>I'm Kenta7777, newbie software engineer.</p>
                <p> <a href="https://github.com/kenta7777"> <img src={github_image} alt="GitHub"></img> </a> </p>
        
                <Header2 name="Main Interests"/>
                <ul> 
                    <MainInterestsItem name="Rust"/>
                    <MainInterestsItem name="Type System"/>
                    <MainInterestsItem name="Compiler"/>
                </ul>
              </header>
            </div>
        );
    }
}

type Props = {
    name: String
}

const MainInterestsItem: React.FC<Props> = props => {
    return (
        <li>{props.name}</li>
    )
}

const Header2: React.FC<Props> = props => {
    return (
        <h2>{props.name}</h2>
    )
}

export default App;
