import './App.css';
import InitialBody from './InitialBody';
import TutorialBody from './TutorialBody';
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
      <h1 className="center-content">
        Spotify Top Ten Songs And Artist
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialBody settracks = {settracks} setartists = {setartists} setusersearched = {setusersearched}/>}></Route>
          <Route path='/TutorialBody' element={<TutorialBody/>}></Route>
        </Routes>
      </BrowserRouter>
      {usersearched? <FinalBody tracks = {tracks} artists = {artists}/>:null}
    </div>
  );
}

export default App;
