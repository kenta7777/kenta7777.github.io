import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

const App = () => {
    var md = require('markdown-it')();
    var emoji = require('markdown-it-emoji');
    md.use(emoji);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
