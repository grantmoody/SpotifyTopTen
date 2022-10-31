import './App.css';
import InitialBody from './InitialBody';
import FinalBody from './FinalBody';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className="App">
      <br />
      <h1 className="center-content">
        Spotify Top Ten Songs And Artist
      </h1>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialBody />}></Route>
          <Route path='/finalbody' element={<FinalBody/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
