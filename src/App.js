import './App.css';
import InitialBody from './InitialBody';
import FinalBody from './FinalBody';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [tracks, settracks] = useState([]);
  const [artists, setartists] = useState([]);
  const [usersearched, setusersearched] = useState(false);
  console.log(tracks)
  return (
    <div className="App">
      <br/>
      <h1 className="center-content">
        Spotify Top Ten Songs And Artist
      </h1>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialBody settracks = {settracks} setartists = {setartists} setusersearched = {setusersearched}/>}></Route>
          <Route path='/finalbody' element={<FinalBody/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
